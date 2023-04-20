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
import Button from "../../components/General/Button";
import { useState } from "react";
import RadioGroup from "../../components/General/Radio";
import { GrValidate } from "react-icons/gr";
import Input from "../../components/General/Input";
import Nigeria from "../../assets/Nigeria";
import Idea from "../../assets/Idea";
import Document from "../../assets/Document";
export default function SevisPage() {
  const [state, setState] = useState(0);
  return (
    <main className={styles.SevisPage}>
      <ChatSupportBox />
      {(state === 0 || state === 1) && <HeaderElement />}
      {state === 0 && <OptionsElement setState={setState} />}
      {state === 1 && <StartSevisPayment setState={setState} />}
      {state === 2 && <SevisHeader />}
      {state === 2 && <SevisValidation />}
    </main>
  );
}

function HeaderElement() {
  return (
    <section className={styles.Header}>
      <HighlightHeader content="SEVIS FEE" />
      <Paragraphs content="We carry out Sevis fee payments to help you focus on other Important school runs" />
    </section>
  );
}

function OptionsElement({ setState }) {
  let Options = [
    {
      icon: <Sevis />,
      button: "Pay I-901 Fee",
      header: " I-901 Fee Payments",
      content:
        "Click here if you have or have not Completed the Form I-20 or DS-2019 and want to pay the Sevis Fee",
    },
    {
      icon: <ViewStatus />,
      button: "View Status",
      header: "View Payment Status",
      content:
        "If you have already made a payment on Educarts previously, Click view to track your payments Status",
    },
    {
      icon: <LearnMore />,
      button: "Learn More",
      header: "Learn About SEVIS Fees",
      content: "Obtain More Clarity on SEVIS-1901 Payments and Procedure",
    },
  ];
  return (
    <section className={styles.Options}>
      <Headers content="Sevis Payment Options" />
      <aside className={styles.Grid}>
        {Options.map(({ icon, button, header, content }, i) => (
          <div key={i} className={styles.Item}>
            <div
              className={styles.top}
              style={{ justifyContent: "space-between" }}
            >
              {icon}
              <Button
                content={button}
                style={{
                  fontSize: "14px",
                  lineHeight: "0px",
                  letterSpacing: "-0.02em",
                  height: "auto",
                }}
                action={() => setState(1)}
              />
            </div>
            <Headers
              content={header}
              style={{ fontSize: "18px", lineHeight: "28px" }}
            />
            <Span content={content} />
          </div>
        ))}
      </aside>
    </section>
  );
}

function StartSevisPayment({ setState }) {
  const [selectedOption, setSelectedOption] = useState("auto");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  let radioOptions = [
    { value: "auto", label: "Carry out all the SEVIS Fee Payment for me" },
    { value: "user", label: "I have generated SEVIS Payment Coupon " },
  ];
  return (
    <section className={styles.StartSevisPayment}>
      <SevisHeader />
      <aside className={styles.Body}>
        <RadioGroup
          options={radioOptions}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
      </aside>
      <Button content="Proceed" action={() => setState(2)} />
    </section>
  );
}

function SevisHeader() {
  return (
    <aside className={styles.Head}>
      <div className={styles.contentLeft}>
        <Sevis />
        <Headers content="I-901 Service Fee Payment" />
      </div>
      <div className={styles.contentRight}>
        <Span content="View Payment Status" />
        <Span content="Learn About SEVIS" />
      </div>
    </aside>
  );
}

function SevisValidation({ setState }) {
  let position = [
    "Applicants Information",
    "Payment Method",
    "Confirm Payment",
  ];
  const [selectedOption, setSelectedOption] = useState("DS 2019 J-1");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  let radioOptions = [
    {
      value: "DS 2019 J-1",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span>DS 2019 J-1</span>
          <Sevis />
        </span>
      ),
    },
    {
      value: "Form 1-20",
      label: (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span>Form 1-20</span>
          <Sevis />
        </span>
      ),
    },
  ];
  let isMobile = useMQ("(max-width: 700px)");
  return (
    <section className={styles.SevisValidation}>
      <Pointer position={position} />
      <section className={styles.Sevis}>
        <aside className={styles.Info}>
          <aside className={styles.ValidationInfo}>
            <div className={styles.header}>
              <GrValidate />
              <Paragraphs content="Validation Information" />
            </div>
            {isMobile ? <Note /> : null}
            <div className={styles.formType}>
              <Paragraphs content="Form Type" />
              <RadioGroup
                options={radioOptions}
                selectedOption={selectedOption}
                onChange={handleOptionChange}
              />
            </div>
            <div className={styles.form}>
              {selectedOption == "DS 2019 J-1" && (
                <Input
                  placeholder="Select Category"
                  label="Category"
                  labelAfter="*"
                />
              )}
              <Input
                placeholder="Enter Sevis ID"
                label="Sevis ID"
                labelAfter="*"
              />
              <Input
                placeholder="Enter Last Name"
                label="Last Name"
                labelAfter="*"
              />
              <Input
                placeholder="Enter First & Second Name"
                label="Given Names"
              />
              <Input placeholder="" label="Date of Birth" labelAfter="*" />
            </div>
          </aside>
          <aside className={styles.ValidationInfo}>
            <div className={styles.header}>
              <GrValidate />
              <Paragraphs content="Personal Information" />
            </div>
            <div className={styles.form} style={{ margin: "3rem 0 1.5rem" }}>
              <Input
                placeholder="Enter Email"
                label="Email"
                type="email"
                labelAfter="*"
              />
              <Input
                placeholder="Enter Last Name"
                label="Last Name"
                labelAfter="*"
              />
              <Input
                label="Phone Number"
                type="number"
                before={
                  <>
                    <Nigeria /> <i>+234</i>
                  </>
                }
              />
              <Input
                placeholder="Select country"
                label="Country of residence"
                labelAfter="*"
              />
              <Input
                placeholder="Select country"
                label="Country of Birth"
                labelAfter="*"
              />
            </div>
          </aside>
          <Button
            action={() => setState(3)}
            content="Next"
            style={{
              height: "auto",
              margin: "0 auto 2rem",
              padding: "10px 50px",
              width: isMobile ? "100%" : "",
            }}
          />
        </aside>
        {isMobile ? null : <Aside />}
      </section>
    </section>
  );
}

function Aside({ state }) {
  return (
    <div className={styles.Aside}>
      <Note />
      <div className={styles.document}>
        <div className={styles.doc1}>
          <div className={styles.doc2}>
            <div className={styles.doc3}>
              <Document />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Note() {
  return (
    <div className={styles.Note}>
      <div className={styles.top}>
        <Idea />
        <Headers content="Please Note" />
      </div>
      <Paragraphs content=">Ensure you have a complete and accurate Form I-20 or DS-2019." />
      <Paragraphs content=" >If you do not have an I-20 or DS-2019 or if the information on the form is incorrect, contact your school official or program sponsor." />
    </div>
  );
}

export function Pointer({ position }) {
  let CircleStyle = { background: "#696A6A" };
  let scale = { scale: 0.7 };
  return (
    <div className={styles.Pointer}>
      {position.map((point, i) => (
        <div className={styles.Point} key={i}>
          <div className={styles.MainPointer} style={{ gap: i != 0 ? 0 : "" }}>
            <div
              className={styles.OuterCircle}
              style={i != 0 ? { ...scale, ...CircleStyle } : {}}
            >
              <div
                className={styles.InnerCircle}
                style={i != 0 ? CircleStyle : {}}
              >
                <span>{i + 1}</span>
              </div>
            </div>
            <Paragraphs content={point} style={i != 0 ? scale : {}} />
          </div>
          {i != position.length - 1 && (
            <span className={styles.PointerLine}></span>
          )}
        </div>
      ))}
    </div>
  );
}
