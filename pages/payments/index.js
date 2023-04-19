import Headers from "../../components/General/Headers";
import useMQ from "../../hooks/useMQ";
import bg from "../../assets/paymentsBG.png";
import Image from "next/image";
import Paragraphs from "../../components/General/Paragraphs";
import Span from "../../components/General/Span";
import styles from "../../styles/payments.module.css";
import Sevis from "../../assets/Sevis";
import Certificate from "../../assets/Certificate";
import Plane from "../../assets/Plane";
import More from "../../assets/More";
import ApplicationEmail from "../../assets/ApplicationEmail";
import AdmissionDoc from "../../assets/AdmissionDocument";
import PaymentTracker from "../../assets/PaymentTracker";
import { ChatSupportBox } from "../../components/Home";
import Link from "next/link";

export default function Payments() {
  const isMobile = useMQ("(max-width: 700px)");
  return (
    <main className={styles.Payments}>
      <ChatSupportBox />
      <section
        className={styles.Main}
        style={{ paddingRight: isMobile ? "10%" : 0 }}
      >
        <Headers
          content="Select a payment you want to make"
          style={{ fontSize: "24px", lineHeight: "38px", color: "#3E3E42" }}
        />
        <aside className={styles.Grid}>
          {paymentMethods.map(({ icon, header, content, link }, i) => (
            <Link key={i} href={`/payments/${link}`}>
              <a className={styles.Item}>
                <div className={styles.top}>
                  {icon}
                  <Paragraphs content={header} />
                </div>
                <Span content={content} />
              </a>
            </Link>
          ))}
        </aside>
      </section>
      {!isMobile && (
        <section className={styles.Background}>
          <div></div>
        </section>
      )}
    </main>
  );
}

let paymentMethods = [
  {
    icon: <Sevis />,
    header: "SEVIS Fee",
    content:
      "Click here if you have or have not Completed the Form I-20 or DS-2019 and want to pay the Sevis Fee",
    link: "/sevis",
  },
  {
    icon: <Certificate />,
    header: "Credential Evaluation",
    content:
      "If you have already made a payment on Educarts previously, Click view to track your payments Status",
    link: "/certificate_eval",
  },
  {
    icon: <ApplicationEmail />,
    header: "Application Fee",
    content:
      "Click here if you have or have not Completed the Form I-20 or DS-2019 and want to pay the Sevis Fee",
    link: "/application_fee",
  },
  {
    icon: <PaymentTracker />,
    header: "Track Payment",
    content:
      "If you have already made a payment on Educarts previously, Click here to track your payments Status",
    link: "/track_payment",
  },
  {
    icon: <AdmissionDoc />,
    header: "Admission Doc. Shipment",
    content: "Obatain your admission doc for less stress",
    link: "/admission_document",
  },
  {
    icon: <Plane />,
    header: "Visa Payments",
    content: "Pay for visa fees with our Agents",
    link: "/visa_payments",
  },
  {
    icon: <More />,
    header: "Others",
    content: "Perform other seaamless transactions on educarts",
    link: "/others",
  },
];
