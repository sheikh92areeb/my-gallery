import { motion } from "framer-motion";
import { useEffect, useState, type FC, type ReactElement } from "react";

interface StateCardProps {
    label: string;
    value: number;
    suffix?: string;
    icon: ReactElement;
}

const StateCard: FC<StateCardProps> = ({ label, value, suffix, icon }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        let incrementTime = 20;
        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <motion.div
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center w-56 h-48 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-blue-600 text-5xl mb-3">{icon}</div>
            <h2 className="text-4xl font-bold text-blue-600">
                {count}
                {suffix}
            </h2>
            <p className="mt-2 text-gray-700 text-lg font-medium text-center">{label}</p>
        </motion.div>
    );
};

export default StateCard