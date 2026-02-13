import { setAllAdminJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                // Ensure withCredentials remains true for cookie-based authentication
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, { 
                    withCredentials: true 
                });
                
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                // Better logging for debugging 401/400 errors
                console.log("Error fetching admin jobs:", error.response?.data?.message || error.message);
            }
        }
        fetchAllAdminJobs();
    }, [dispatch]); // FIX: Added dispatch to the dependency array
}

export default useGetAllAdminJobs;