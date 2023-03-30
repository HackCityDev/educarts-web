import HighlightHeader from "../General/HighlightHeader";
import Paragraphs from "../General/Paragraphs";
import TestImage from "../../assets/testimony.png";
import styles from "./Home.module.css";
import Ghana from "../../assets/Ghana";
import Naija from "../../assets/Naija";
import Quotes from "../../assets/Quotes";
import Image from "next/image";
export default function Test() {
  return (
    <div className={styles.Test}>
      <section className={styles.Blobs}>
        <img src="/blobs/blob1.png" width="500px" height="500px" />
        <img src="/blobs/blob2.png" width="500px" height="500px" />
        <img src="/blobs/blob3.png" width="500px" height="500px" />
      </section>
      <section className={styles.Main}>
        <HighlightHeader
          content="What people say about us"
          style={{
            fontWeight: 600,
            fontSize: "40px",
            lineHeight: "61px",
            color: "#DBEBEE",
            textAlign: "center",
            margin: "20px 0",
          }}
        />
        <main className={styles.Testimonies}>
          {Testimonies.map((Test, i) => (
            <Testimonials key={i} Test={Test} />
          ))}
        </main>
      </section>
    </div>
  );
}
export let Testimonies = [
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
  {
    country: <Ghana />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Naija />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    country: <Naija />,
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    photo: TestImage,
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
];
function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
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
