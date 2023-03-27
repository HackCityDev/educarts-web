import { useEffect, useRef, useState } from "react";
import useInterval from "../../hooks/useInterval";
import Button from "../General/Button";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";
import styles from "./Home.module.css";
export default function Hero() {
  const [bgValue, setBgValue] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgValue((bgValue) => (bgValue === 1 ? 2 : 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const bg = `bg${bgValue}.png`;
  const imageUrl = `url(${bg})`;

  return (
    <div className={styles.Hero} style={{ backgroundImage: imageUrl }}>
      <div className={styles.HeroMain}>
        <Headers content="Payment Solutions you can trust" />
        <Paragraphs
          content="Making Cross boarder School payments  easier for you 
            and yours. with our easy and fast payment solution. 
            From school fees to accommodation we got you covered"
        />
        <Button content="Make A Payment" />
        <aside className={styles.dummy}>
          {[1, 2, 3].map((num) => (
            <span key={num}></span>
          ))}
        </aside>
      </div>
    </div>
  );
}
