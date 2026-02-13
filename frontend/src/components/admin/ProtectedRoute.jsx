import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector(store => store.auth);
    const navigate = useNavigate();

    useEffect(() => {
        // FIX: Dependency array now includes user and navigate
        if (!user || user.role !== 'recruiter') {
            navigate("/");
        }
    }, [user, navigate]); 

    return (
        <>
            {children}
        </>
    )
};

// FIX: Added prop validation for children
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;