import { FaProjectDiagram, FaSmile, FaCode, FaClock } from "react-icons/fa";
import StateCard from "./StateCard";

const countYears = (year: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - year
}

const States = () => {
    const stats = [
        { label: "Projects Done", value: 120, suffix: "+", icon: <FaProjectDiagram /> },
        { label: "Years of Experience", value: countYears(2022), suffix: "+", icon: <FaClock /> },
        { label: "Happy Clients", value: 50, suffix: "+", icon: <FaSmile /> },
        { label: "Pre-built Components", value: 200, suffix: "+", icon: <FaCode /> },
    ];

    return (
        <section className="w-full py-8 bg-gray-100">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                {stats.map((stat, idx) => (
                    <StateCard key={idx} {...stat} />
                ))}
            </div>
        </section>
    );
};

export default States