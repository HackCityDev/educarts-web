import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import image1 from "../../public/bg3.png";
import image2 from "../../public/bg2.png";
import image3 from "../../public/bg1.png";
import Image from "next/image";
import styles from "./Home.module.css";
import useMQ from "../../hooks/useMQ";

export default function BackgroundImage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bgImageMobile = useMQ("(max-width: 500px)");
  let bg1 = bgImageMobile ? image3 : image1;
  const Imagearray = [bg1, image2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % Imagearray.length);
    }, 500000);

    return () => clearInterval(interval);
  }, [currentImageIndex, Imagearray.length]);
  return (
    <AnimatePresence>
      <motion.div
        key={currentImageIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: [1, 0.8, 0.6, 0.4, 0.2, 0], display: "none" }}
        transition={{ duration: 1 }}
        className={styles.Imagecontainer}
      >
        <Image
          src={Imagearray[currentImageIndex]}
          layout="fill"
          objectFit="cover"
          // objectPosition="center right"
          alt="Background"
        />
      </motion.div>
    </AnimatePresence>
  );
}
