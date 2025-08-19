import { motion, type Variants } from "framer-motion";

const Hero = () => {
  // Variants for staggered animations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between child animations
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: "easeOut", delay: 1.2 }
    },
    hover: { scale: 1.1, borderColor: "#FACC15", color: "#FACC15" }, // yellow hover
  };

  return (
    <div 
      className="relative w-full h-[80vh] bg-center bg-cover bg-no-repeat" 
      style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/80"></div>

      {/* Content with Motion */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto h-full px-4 flex flex-col items-center sm:items-start justify-center text-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Intro Text */}
        <motion.p 
          variants={itemVariants} 
          className="text-lg sm:text-2xl font-semibold mb-6 text-center sm:text-left"
        >
          Showcasing <span className="text-yellow-300 italic">Excellence</span> in Web Design & Development
        </motion.p>
        
        {/* Headline */}
        <motion.h1 
          variants={itemVariants} 
          className="text-3xl sm:text-5xl font-extrabold leading-snug mb-4 text-center sm:text-left"
        >
          Welcome to <span className="text-yellow-300 italic">Project Gallery</span>
        </motion.h1>
        
        {/* Subtext */}
        <motion.p 
          variants={itemVariants} 
          className="text-lg sm:text-xl mb-8 text-center sm:text-left"
        >
          Your Destination for Stunning Creative Websites
        </motion.p>
        
        {/* Button */}
        <motion.button 
          variants={buttonVariants}
          whileHover="hover"
          className="w-fit text-gray-100 border-2 border-gray-100 px-6 py-1 rounded-full cursor-pointer transition-all duration-300 shadow-lg"
        >
          Scroll Down
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
