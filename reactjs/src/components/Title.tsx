import { motion } from "framer-motion";
import type { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <div className="w-full h-[150px] bg-[linear-gradient(to_right,rgba(0,0,0,0.4),rgba(0,0,0,0.8)),url('/title.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <motion.h1
        className="text-white text-4xl bg-gray-50/10 p-3 rounded-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default Title;
