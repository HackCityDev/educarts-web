import Calender from "../../assets/Calendar";
import Church from "../../assets/Church";
import Mail from "../../assets/Mail";
import Button from "../General/Button";
import Headers from "../General/Headers";
import HighlightHeader from "../General/HighlightHeader";
import Paragraphs from "../General/Paragraphs";
import styles from "./Home.module.css";
export default function Start() {
  return (
    <div className={styles.Start}>
      <HighlightHeader content="Get Started in 3 Simple Steps" />
      <div className={styles.Steps}>
        {Starters.map(({ icon, header, text }, i) => (
          <div className={styles.Step} key={i}>
            {icon}
            <Headers content={header} />
            <Paragraphs content={text} />
          </div>
        ))}
      </div>
      <Button content="Make A Payment" />
    </div>
  );
}
let Starters = [
  {
    icon: <Church />,
    header: "Add  your Institution",
    text: "With over 48 foreign schools, Add your school to commence payments",
  },
  {
    icon: <Calender />,
    header: "Enter Your Payments Info",
    text: "Carefully enter all your required transactions information",
  },
  {
    icon: <Mail />,
    header: "Send Payments",
    text: "Send payments securely, and track  your transactions at ease ",
  },
];
