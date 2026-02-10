import Marquee from "react-fast-marquee";

const companies = ["Google", "Amazon2", "Figma2", "Netflix", "Meta2", "Microsoft2", "Pinterest", "Slack2", "Spotify", "Oracle", "Walmart"];

const Companies = () => {
    return (
        <div className="mt-2 pb-5">
            <div className="text-4xl text-center font-bold mb-10 text-gray-800">
                Trusted By <span className="text-yellow-400">1000+</span> Companies
            </div>
            <Marquee>
                {companies.map((company, index) => (
                    <div key={index} className="mx-8 px-2 py-1 hover:bg-mine rounded-xl">
                        <img className="h-14" src={`/Companies/${company}.png`} alt={company} />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Companies;
