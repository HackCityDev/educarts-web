import Image from "next/image";
import AppStore from "../../assets/AppStore";
import HighlightHeader from "../General/HighlightHeader";
import Paragraphs from "../General/Paragraphs";
import Phone from "../../assets/iPhone.png";
import styles from "./Home.module.css";
import GooglePlay from "../../assets/GooglePlay";
export default function Download() {
  return (
    <div className={styles.Download}>
      <aside>
        <HighlightHeader content="Download Educart Mobile" />
        <Paragraphs
          content="Your first three payments are free when you
            get to download our mobile app available
            on apple store and android"
        />
        <div>
          <AppStore /> <GooglePlay />
        </div>
      </aside>
      <aside className="Image">
        <Image src={Phone} objectFit="contain" layout="fill" />
      </aside>
    </div>
  );
}
