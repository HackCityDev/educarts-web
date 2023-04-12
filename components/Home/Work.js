import Button from "../General/Button";
import Headers from "../General/Headers";
import HighlightHeader from "../General/HighlightHeader";
import Paragraphs from "../General/Paragraphs";
import Image1 from "../../assets/counting.png";
import Image2 from "../../assets/smiling.png";
import Image3 from "../../assets/support.png";
import Image4 from "../../assets/typing.png";
import BlobImage from "../../assets/blobMid.png";
import styles from "./Home.module.css";
import Image from "next/image";
export default function Work() {
  return (
    <div className={styles.Work}>
      <aside className={styles.WorkHeader}>
        <span className={styles.line}></span>
        <HighlightHeader content="Many People Trust us to" />
      </aside>
      <section className={styles.WorkBody}>
        <div className={styles.Blob}>
          <Image src={BlobImage} objectFit="contain" layout="fill" />
        </div>
        {WorkContent.map((content) => (
          <aside key={content.header}>
            <div className="Image">
              <Image src={content.image} objectFit="contain" layout="fill" />
            </div>
            <div className={styles.WorkContent}>
              <Headers content={content.header} />
              <Paragraphs content={content.paragraph} />
              <Button content="Learn More" link={content.link} />
            </div>
          </aside>
        ))}
      </section>
    </div>
  );
}

let WorkContent = [
  {
    image: Image1,
    header: "Deliver fast payments to schools Internationally",
    paragraph:
      "We help you pay for a wide range of school fees which include tuition, application, credentials evaluation, SEVIS, admission documents etc. Our solution is fast and reliable.",
    link: "",
  },
  {
    image: Image2,
    header: "Reasonable exchange rates so you pay less",
    paragraph:
      "We know rates can fluctuates from time to time, so we have a stable mechanism that makes sure we offer you the cheapest there can be around.",
    link: "",
  },
  {
    image: Image3,
    header: "Experts advice and support for complex transactions",
    paragraph:
      "Our experts are always ready to guide you through complex transactions so you can complete your payment process in time",
    link: "",
  },
  {
    image: Image4,
    header: "Digital Wallets to make transactions easier ",
    paragraph:
      "With digital wallets you have more powers in your hands. You can fund your wallet and carry out faster transactions, transfer funds  from wallets to wallet of friends and family.",
    link: "",
  },
];
