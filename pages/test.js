import Image from "next/image";
import { useEffect, useState } from "react";
import Ghana from "../assets/Ghana";
import Quotes from "../assets/Quotes";
import Paragraphs from "../components/General/Paragraphs";
import TestImage from "../assets/testimony.png";
import styles from "../components/Home/Home.module.css";

let Testimonies = [
  {
    country: <Ghana />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Ghana />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
];
console.log(styles);
export function Testimonials({ Test }) {
  return (
    <aside className={styles.TestBox}>
      <div className={styles.Top}>
        <Quotes />
        {Test.country}
      </div>
      <Paragraphs content={Test.text} />
      <div className={styles.Bottom}>
        <div className={styles.BottomImage}>
          <Image
            src={Test.photo}
            objectFit="contain"
            layout="fill"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className={styles.BottomInfo}>
          <b>{Test.name}</b>
          <span>{Test.more}</span>
        </div>
      </div>
    </aside>
  );
}

const Carousel = ({ testimonials, interval }) => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex(
        (currentTestimonialIndex + 1) % testimonials.length
      );
    }, interval);

    return () => clearInterval(timer);
  }, [currentTestimonialIndex, interval]);

  return (
    <div>
      <Testimonials Test={testimonials[currentTestimonialIndex]} />
    </div>
  );
};
export default function Test() {
  return <Carousel testimonials={Testimonies} interval={3000} />;
}
