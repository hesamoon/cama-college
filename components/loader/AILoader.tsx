import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AILoader({ text }: { text: string }) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="mobile-body-large md:body-large w-fit px-3 py-1.5 rounded-md text-on_surface-light italic flex items-center gap-1"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.2, repeat: Infinity }}
    >
      <div className="w-5.5 h-5.5">
        <video
          autoPlay
          loop={true} // set true if you want looping
          muted
          playsInline
          className="rounded-full"
        >
          <source src="/tuum/tuum-animation2.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      {text}
      {dots}
    </motion.div>
  );
}
