import Download from "./Download";
import Hero from "./Hero";
import styles from "./Home.module.css";
import Service from "./Service";
import Start from "./Start";
import Testimony from "./Testimony";
import Work from "./Work";
export default function Index() {
  return (
    <div className={styles.Index}>
      <Hero />
      <Service />
      <Work />
      <Testimony />
      <Start />
      <Download />
    </div>
  );
}
