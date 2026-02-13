// Detect if we are running locally or on the live site
const BASE_URL = import.meta.env.MODE === "development" 
    ? "http://localhost:8000/api/v1" 
    : "https://job-and-intership-platform.onrender.com/api/v1";

// API Endpoints using the dynamic BASE_URL
export const USER_API_END_POINT = `${BASE_URL}/user`;
export const JOB_API_END_POINT = `${BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${BASE_URL}/company`;