import { useEffect, useState } from "react";
import Button from "../General/Button";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";
import styles from "./Home.module.css";
import BackgroundImage from "./ImageCarosel";
export default function Hero() {
  const [currentSpan, setCurrentSpan] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSpan((prevSpan) => (prevSpan >= 3 ? 1 : prevSpan + 1));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.Hero}>
      <BackgroundImage />
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
            <span
              key={num}
              style={{
                background:
                  num === currentSpan
                    ? "#17324f"
                    : num === currentSpan + 1 ||
                      (currentSpan === 3 && num === 1)
                    ? "#6a839f"
                    : "#e9edf1",
              }}
            ></span>
          ))}
        </aside>
      </div>
    </div>
  );
}
