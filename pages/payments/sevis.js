import Headers from "../../components/General/Headers";
import useMQ from "../../hooks/useMQ";
import Paragraphs from "../../components/General/Paragraphs";
import Span from "../../components/General/Span";
import styles from "../../styles/payments.module.css";
import Sevis from "../../assets/Sevis";
import ViewStatus from "../../assets/ViewStatus";
import LearnMore from "../../assets/SevisLearnmore";
import { ChatSupportBox } from "../../components/Home";
import HighlightHeader from "../../components/General/HighlightHeader";
export default function SevisPage() {
  return (
    <main>
      <ChatSupportBox />
      <section className={styles.Header}>
        <HighlightHeader content="SEVIS FEE" />
        <Paragraphs content="We carry out Sevis fee payments to help you focus on other Important school runs" />
      </section>
      <section></section>
    </main>
  );
}
