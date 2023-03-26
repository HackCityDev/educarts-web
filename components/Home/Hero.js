import Button from "../General/Button";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";
import styles from "./Home.module.css";
export default function Hero() {
  return (
    <div className={styles.Hero}>
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
