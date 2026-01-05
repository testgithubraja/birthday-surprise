import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";

const photos = [photo1, photo2, photo3];

function PhotoGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={photos[index]}
          alt="memory"
          className="slide-photo"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </div>
  );
}

export default PhotoGallery;
