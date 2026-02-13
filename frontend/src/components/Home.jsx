import { useEffect } from 'react' // FIX: Removed unused 'React'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Companies from './ui/Companies'
import Working from './Working'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    // FIX: Included navigate and user in dependencies
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Companies />
      <CategoryCarousel />
      <Working />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home;