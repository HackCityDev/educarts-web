import Logo2 from "../../assets/Logo2";
import Button from "../General/Button";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import HighlightHeader from "../General/HighlightHeader";
import Input from "../General/Input";
import Headers from "../General/Headers";
import Paragraphs from "../General/Paragraphs";
import Span from "../General/Span";
import styles from "./Layout.module.css";
export default function Footer() {
  return (
    <footer className={styles.Footer} id="footer">
      <section className={styles.Blobs}>
        <img src="/blobs/blob.png" />
      </section>
      <section className={styles.Main}>
        <aside className={styles.Aside1}>
          <div className={styles.DivLogo}>
            <Logo2 />
            <Span content="Our stand is with the Students" />
          </div>
          <div className={styles.DivSocials}>
            {" "}
            <BsFacebook /> <BsInstagram /> <BsTwitter />
          </div>
        </aside>
        <aside className={styles.Aside2}>
          <div className={styles.Div1}>
            <Headers content="Solution" style={{ color: "#dee3e4" }} />
            {solutions.map((solution) => (
              <Paragraphs content={solution} key={solution} />
            ))}
          </div>
          <div className={styles.Div2}>
            <Headers content="Contact" style={{ color: "#dee3e4" }} />
            {contacts.map((solution) => (
              <Paragraphs content={solution} key={solution} />
            ))}
          </div>
        </aside>
        <aside className={styles.Aside3}>
          <div className={styles.DivText}>
            <HighlightHeader content="Sign Up To Our Newsletter" />
            <Span content="Be the first to get the latest Updates, tips and discounts" />
          </div>
          <div className={styles.DivInput}>
            <Input
              placeholder="Email"
              inputStyle={{ borderRadius: "3.5px", border: "1px solid #fff" }}
            />
            <Button content="Subscribe" />
          </div>
        </aside>
      </section>
      <section>&copy; 2023 HackCity, Inc. All rights reserved.</section>
    </footer>
  );
}
let solutions = ["Payments", "Consultation", "Insights"];
let contacts = [
  "24, adebowale street yaba lagos",
  "Educart@customercare.com",
  "+2349091084196",
];
