import HighlightHeader from "../General/HighlightHeader";
import styles from "./Home.module.css";
import Testimonials from "./Test2";
export default function Testimony() {
  return (
    <div className={styles.Testimony}>
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
        <Testimonials />
      </section>
    </div>
  );
}
export let Testimonies = [
  {
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
    name: "Esene Godwin",
    more: "MBA. Industrial Design, Imperial College London, Accra Ghana",
  },
  {
    text: "I appreciate the customer supports they were very responsive and resolved them in time, Thank you Educart",
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
