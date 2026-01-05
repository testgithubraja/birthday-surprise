import Confetti from "react-confetti";
import { useEffect, useState } from "react";

function PartyEffect() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={200}
      gravity={0.15}
      recycle
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}

export default PartyEffect;
