import Image from "next/image";
import Support from "../../assets/Support";
import Button from "../General/Button";
import Paragraphs from "../General/Paragraphs";
import HighlightHeader from "../General/HighlightHeader";
import styles from "./Home.module.css";
export default function Service() {
  return (
    <div className={styles.Service}>
      <aside className={styles.ServiceHeader}>
        <HighlightHeader content="Our Services Include" />
        <div className={styles.button}>
          <Button
            content={
              <>
                <Support />
                Help
              </>
            }
          />
        </div>
      </aside>
      <aside className={styles.Services}>
        {" "}
        {Services.map((service) => (
          <div className={styles.service}>
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
  { image: "/grad.png", header: "Consultation" },
  { image: "/student.png", header: "Funds Transfer" },
];
