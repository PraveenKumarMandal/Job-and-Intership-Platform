import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, { withCredentials: true });
                
                if (res.data.success) {
                    // Make sure the key matches your backend (res.data.application or res.data.appliedJobs)
                    dispatch(setAllAppliedJobs(res.data.application));
                }
            } catch (error) {
                // Better error logging for debugging 401 or network issues
                console.log("Error fetching applied jobs:", error.response?.data?.message || error.message);
            }
        }
        fetchAppliedJobs();
    }, [dispatch]); // FIX: Added dispatch to the dependency array
};

export default useGetAppliedJobs;