# Job & Internship Platform

A full-stack MERN (MongoDB, Express.js, React, Node.js) application designed to connect students with career opportunities. This platform allows recruiters to post jobs and manage companies, while students can browse, search, and apply for positions.

## 🚀 Features

### For Job Seekers (Students)
* **User Authentication:** Secure login/signup with role-based access (Student/Recruiter).
* **Profile Management:** Update personal details, bio, skills, and upload resumes (PDF).
* **Job Discovery:** Filter jobs by keywords, location, and category.
* **Application Tracking:** View and track the status of all applied jobs in a dedicated dashboard.

### For Recruiters
* **Company Branding:** Register and update company profiles with logos and descriptions.
* **Job Management:** Post, edit, and manage job listings with specific requirements (Salary, Positions, Experience).
* **Applicant Review:** View a list of students who have applied for specific jobs.

## 🛠️ Tech Stack

* **Frontend:** React.js, Redux Toolkit, Tailwind CSS, Shadcn UI, Lucide React.
* **Backend:** Node.js, Express.js, JWT (JSON Web Tokens), Cookie-parser.
* **Database:** MongoDB Atlas (Mongoose ODM).
* **File Storage:** Cloudinary (for profile pictures and resumes).

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/job-internship-platform.git](https://github.com/your-username/job-internship-platform.git)
cd job-internship-platform

### 2. Backend Setup
Navigate to the backend folder: cd backend

Install dependencies: npm install

Create a .env file and add your credentials:

Code snippet
PORT=8000
MONGO_URI=your_mongodb_atlas_uri
SECRET_KEY=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
Start the server: npm run dev

### 3. Frontend Setup
Navigate to the frontend folder: cd ../frontend

Install dependencies: npm install

Start the development server: npm run dev

🌐 Deployment
Frontend: Deployed on Netlify.

Backend: Deployed on Render.

Database: Hosted on MongoDB Atlas.

<img width="1920" height="820" alt="Screenshot (220)" src="https://github.com/user-attachments/assets/4b85f776-1494-48b7-a2f0-b94c42b47271" />
<img width="1920" height="822" alt="Screenshot (219)" src="https://github.com/user-attachments/assets/fede5423-ad45-4585-bc90-05ade4604b41" />

