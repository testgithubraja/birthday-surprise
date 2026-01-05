import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Howl } from "howler";
import { useEffect } from "react";
import song from "../assets/song.mp3";
function BirthdayCard() {
  useEffect(() => {
    const sound = new Howl({
      src: [song],
      autoplay: true,
      loop: true,
      volume: 0.7
    });
    return () => sound.stop();
  }, []);

  return (
    <div className="container">
      <Confetti />

      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="title"
      >
        🎉 Happy Birthday 🎉
      </motion.h1>

      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="name"
      >
        ❤️ HER NAME ❤️
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="message"
      >
        May your life always be filled with love, smiles and happiness 💖
      </motion.p>
    </div>
  );
}

export default BirthdayCard;