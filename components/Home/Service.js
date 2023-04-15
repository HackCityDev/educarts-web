import Image from "next/image";
import Paragraphs from "../General/Paragraphs";
import HighlightHeader from "../General/HighlightHeader";
import styles from "./Home.module.css";
export default function Service() {
  return (
    <div className={styles.Service}>
      <aside className={styles.ServiceHeader}>
        <HighlightHeader content="Our Services Include" />
      </aside>
      <aside className={styles.Services}>
        {" "}
        {Services.map((service) => (
          <div className={styles.service} key={service.header}>
            <div className={styles.serviceImage}>
              <Image src={service.image} objectFit="cover" layout="fill" />
            </div>
            <Paragraphs content={service.header} />
          </div>
        ))}
      </aside>
    </div>
  );
}
let Services = [
  { image: "/grad.png", header: "Educational Payments" },
  { image: "/service2.png", header: "Consultation" },
  { image: "/student.png", header: "Funds Transfer" },
];
