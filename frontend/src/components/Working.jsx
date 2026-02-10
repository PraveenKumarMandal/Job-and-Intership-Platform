import React from "react";
import girlImage from "../assets/girlpng2.png";

const Working = () => {
    return React.createElement(
        "div",
        { className: "mt-20 pb-5 flex flex-col items-center" },
        // Heading Section
        React.createElement(
            "div",
            { className: "text-4xl text-center font-bold mb-3 text-gray-700" },
            "How it ",
            React.createElement("span", { className: "text-yellow-500" }, "Works")
        ),
        React.createElement(
            "div",
            { className: "text-lg mx-auto text-gray-500 mb-10 text-center w-1/2" },
            "Navigate through the process and land your dream job."
        ),
        // Main Section
        React.createElement(
            "div",
            { className: "flex gap-16 px-16 items-start justify-start w-full" },
            // Left Image (Sticks to Left)
            React.createElement("div", { className: "w-[35rem] flex-shrink-0 self-start ml-0" },
                React.createElement("img", {
                    className: "w-full",
                    src: girlImage,
                    alt: "Girl illustration"
                })
            ),
            // Right Section (Smaller with steps in boxes)
            React.createElement(
                "div",
                { className: "w-1/3 space-y-3" },
                [
                    { title: "Sign Up:", desc: "Register and complete your profile." },
                    { title: "Resume Upload:", desc: "Upload or create a resume online." },
                    { title: "Job Search:", desc: "Use filters to find relevant jobs." },
                    { title: "Apply:", desc: "Submit applications with required details." },
                    { title: "Shortlisting:", desc: "Employers review and shortlist candidates." },
                    { title: "Interview:", desc: "Attend online tests & interview rounds." },
                    { title: "Offer:", desc: "Receive and accept the job offer." },
                    { title: "Onboarding:", desc: "Get joining details and company policies." },
                    { title: "Joining:", desc: "Start your job, probation may apply." }
                ].map((step, index) => 
                    React.createElement(
                        "div",
                        { key: index, className: "p-3 border rounded-lg shadow-md bg-white text-sm" },
                        React.createElement("strong", {}, step.title),
                        " ",
                        step.desc
                    )
                )
            )
        )
    );
};

export default Working;
