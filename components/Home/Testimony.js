import Button from "../General/Button";
import Headers from "../General/Headers";
import HighlightHeader from "../General/HighlightHeader";
import Paragraphs from "../General/Paragraphs";
import TestimonyImage from "../../assets/testimony.png";
import styles from "./Home.module.css";
import Ghana from "../../assets/Ghana";
import Naija from "../../assets/Naija";
import Quotes from "../../assets/Quotes";
import Image from "next/image";
export default function Testimony() {
  return (
    <div className={styles.Testimony}>
      <HighlightHeader content="What people say about us" />
      <div>
        {Testimonies.map((testimony, i) => (
          <aside key={i} className={styles.TestimonyBox}>
            <div className={styles.Top}>
              <Quotes />
              {testimony.country}
            </div>
            <Paragraphs content={testimony.text} />
            <div className={styles.Bottom}>
              <Image
                src={testimony.photo}
                width="200px"
                height="200px"
                style={{ borderRadius: "50%" }}
              />
              <div className={styles.BottomInfo}>
                <b>{testimony.name}</b>
                <span>{testimony.more}</span>
              </div>
            </div>
          </aside>
        ))}
      </div>
    </div>
  );
}
let Testimonies = [
  {
    country: <Ghana />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Naija />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Naija />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestimonyImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
];
