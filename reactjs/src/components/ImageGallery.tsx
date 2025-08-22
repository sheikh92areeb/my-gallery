import { useState, type FC } from "react";
import { motion } from "framer-motion";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-4 mb-5">
      {/* Main Preview */}
      <motion.div
        key={selected}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={images[selected]}
          alt={`Preview ${selected + 1}`}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(idx)}
            className={`bg-white rounded-lg overflow-hidden border-2 transition ${
              selected === idx
                ? "border-orange-500"
                : "border-transparent hover:border-blue-400"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-24 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
