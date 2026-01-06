import { motion } from "framer-motion";
import { Howl } from "howler";
import { useEffect } from "react";
import song from "../assets/song.mp3";

function BirthdayCard() {
  useEffect(() => {
    const sound = new Howl({
      src: [song],
      autoplay: true,
      loop: true,
      volume: 0.6,
    });

    return () => sound.stop();
  }, []);

  return (
    <div className="container">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        🎉 Happy Birthday 🎉
      </motion.h1>

      <motion.h2
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="name"
      >
        ❤️ Shital ji ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="message"
      >
        Wishing you endless happiness, love and smiles 💖
      </motion.p>
    </div>
  );
}

export default BirthdayCard;
