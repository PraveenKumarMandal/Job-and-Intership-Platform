import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);

    useEffect(() => {
        const fetchAllJobs = async () => {
            try {
                // Ensure withCredentials is true to fix 401 Unauthorized errors
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, {
                    withCredentials: true 
                });
                
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                // Better error logging to debug 400/401 issues
                console.log("Error fetching jobs:", error.response?.data?.message || error.message);
            }
        }
        fetchAllJobs();
    }, [searchedQuery, dispatch]); // Added dependencies to trigger re-fetch on search
}

export default useGetAllJobs;