
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice";
import { FaCode, FaServer, FaChartLine, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const categories = [
    { title: "Frontend Developer", icon: <FaCode />, description: "Build interactive UI using React, Vue, or Angular." },
    { title: "Backend Developer", icon: <FaServer />, description: "Develop server-side logic with Node.js, Django, or Spring Boot." },
    { title: "Data Science", icon: <FaChartLine />, description: "Analyze data & build ML models with Python & AI." },
    { title: "Graphic Designer", icon: <FaPaintBrush />, description: "Create visual concepts, branding, and UI/UX designs." },
    { title: "FullStack Developer", icon: <FaLaptopCode />, description: "Work on both frontend & backend to build complete apps." }
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className="mt-32 w-full">
            <div className="text-4xl text-center font-bold mb-3 text-gray-700">
                Browse <span className="text-yellow-400">Job</span> Category
            </div>
            <div className="text-lg mx-auto text-gray-600 mb-10 text-center w-1/2">
                Explore diverse job opportunities tailored to your skills. Start your career journey today!
            </div>

            {/* Carousel Container */}
            <div className="w-full max-w-5xl mx-auto px-2">
                <Carousel className="w-full" options={{ loop: true, autoplay: 3000 }}>
                    <CarouselContent className="flex gap-6">
                        {categories.map((cat, index) => (
                            <CarouselItem key={index} className="basis-1/4">
                                <div 
                                    className="w-full h-56 flex flex-col items-center justify-center rounded-2xl shadow-lg cursor-pointer hover:shadow-xl transition "
                                    onClick={() => searchJobHandler(cat.title)}
                                >
                                    <div className="text-4xl mb-3">{cat.icon}</div>
                                    <h3 className="text-xl font-bold text-orange-500">{cat.title}</h3>
                                    <p className="text-center w-3/4">{cat.description}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation Buttons with Padding */}
                    <div className="flex justify-between w-full absolute top-1/2 transform -translate-y-1/2 px-16">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default CategoryCarousel;
