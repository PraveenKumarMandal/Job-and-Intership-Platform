import { Company } from "../models/company.model.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

// Register a new company
export const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }

        // Check if company already exists (Case-insensitive check)
        let company = await Company.findOne({ name: { $regex: new RegExp(`^${companyName}$`, "i") } });
        if (company) {
            return res.status(400).json({
                message: "You can't register the same company name twice.",
                success: false
            });
        }

        // Create the company and associate it with the logged-in user
        company = await Company.create({
            name: companyName,
            userId: req.id // Injected by isAuthenticated middleware
        });

        return res.status(201).json({
            message: "Company registered successfully.",
            company,
            success: true
        });
    } catch (error) {
        console.log("Error in registerCompany:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
}

// Get all companies registered by the logged-in user
export const getCompany = async (req, res) => {
    try {
        const userId = req.id; 
        const companies = await Company.find({ userId });

        if (!companies || companies.length === 0) {
            return res.status(404).json({
                message: "No companies found for this user.",
                success: false
            });
        }

        return res.status(200).json({
            companies,
            success: true
        });
    } catch (error) {
        console.log("Error in getCompany:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
}

// Get a single company by ID
export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            company,
            success: true
        });
    } catch (error) {
        console.log("Error in getCompanyById:", error);
        return res.status(500).json({
            message: "Internal server error.",
            success: false
        });
    }
}

// Update company details (Description, Website, Location, Logo)
export const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;
        const file = req.file; // From Multer
        
        const updateData = { name, description, website, location };

        // FIX: Only attempt Cloudinary upload if a file is actually sent
        if (file) {
            const fileUri = getDataUri(file);
            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            updateData.logo = cloudResponse.secure_url;
        }

        // Update company and return the new document
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Company information updated.",
            company,
            success: true
        });

    } catch (error) {
        console.log("Error in updateCompany:", error);
        return res.status(500).json({
            message: "An error occurred while updating the company.",
            success: false
        });
    }
}