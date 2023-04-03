import { useEffect, useRef } from "react";
import ChatSupport from "../../assets/ChatSupport";
import useFooterInView from "../../hooks/useFooterInView";
import Download from "./Download";
import Hero from "./Hero";
import styles from "./Home.module.css";
import Service from "./Service";
import Start from "./Start";
import Work from "./Work";
import Testimony from "./Testimony";
export default function Index() {
  let bottom = useFooterInView();
  let supportRef = useRef(null);
  function removeFixedPosition() {
    if (supportRef.current && bottom) {
      supportRef.current.style.position = "absolute";
      supportRef.current.style.bottom = "1%";
    } else {
      supportRef.current.style.position = "fixed";
      supportRef.current.style.bottom = "5%";
    }
  }
  useEffect(removeFixedPosition, [bottom]);
  return (
    <div className={styles.Index}>
      <section className="Support" ref={supportRef}>
        <ChatSupport /> Help
      </section>
      <Hero />
      <Service />
      <Work />
      <Testimony />
      <Start />
      <Download />
    </div>
  );
}
