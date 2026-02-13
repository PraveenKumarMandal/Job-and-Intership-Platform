import { setSingleCompany } from '@/redux/companySlice'
import { COMPANY_API_END_POINT } from '@/utils/constant' // Removed JOB_API_END_POINT
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, { withCredentials: true });
                
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                // Better error logging for debugging
                console.log("Error fetching company by ID:", error.response?.data?.message || error.message);
            }
        }
        
        if (companyId) {
            fetchSingleCompany();
        }
    }, [companyId, dispatch]);
}

export default useGetCompanyById;