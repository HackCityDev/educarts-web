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
import { useEffect, useState } from "react";
import RadioGroup from "../../components/General/Radio";
import { GrValidate } from "react-icons/gr";
import { RxCopy } from "react-icons/rx";
import Input from "../../components/General/Input";
import Nigeria from "../../assets/Nigeria";
import Idea from "../../assets/Idea";
import Document from "../../assets/Document";
import Cloud from "../../assets/Cloud";
import Person from "../../assets/PersonalInfo";
import MasterCard from "../../assets/MasterCard";
import Visa from "../../assets/Visa";
import Paypal from "../../assets/Paypal";
import Lock from "../../assets/Lock";
import InfoModal from "../../assets/InfoModal";
import Timer from "../../assets/Timer";
import GTBankLogo from "../../assets/GTBank";
let gloablButtonStyle = {
  height: "auto",
  margin: "0 auto 2rem",
  padding: "10px 50px",
  width: "min(100%, 300px)",
};
export default function SevisPage() {
  const [state, setState] = useState(0);
  let isMobile = useMQ("(max-width: 700px)");
  return (
    <main className={styles.SevisPage}>
      <ChatSupportBox />
      {(state === 0 || state === 1) && <HeaderElement />}
      {state === 0 && <OptionsElement setState={setState} />}
      {state === 1 && <StartSevisPayment setState={setState} />}
      {state === 2 || (state === 3 && <SevisHeader />)}
      {state === 2 && (
        <SevisValidation isMobile={isMobile} setState={setState} />
      )}
      {state === 3 && <PaymentMethod isMobile={isMobile} setState={setState} />}
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
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  useEffect(() => {
    if (selectedOption === "auto") setState(2);
    if (selectedOption === "user") setState(3);
  }, [selectedOption]);
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

let position = ["Applicants Information", "Payment Method", "Confirm Payment"];

function SevisValidation({ setState, isMobile }) {
  const [selectedOption, setSelectedOption] = useState("DS 2019 J-1");
  const [localState, setLocalState] = useState(false);
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
  return (
    <section className={styles.SevisValidation}>
      {isMobile ? (
        <MobilePointer position={position} index={0} />
      ) : (
        <Pointer position={position} index={0} />
      )}
      <section className={styles.Sevis}>
        {localState ? (
          <Form2 setState={setState} isMobile={isMobile} />
        ) : (
          <Form1
            selectedOption={selectedOption}
            isMobile={isMobile}
            radioOptions={radioOptions}
            handleOptionChange={handleOptionChange}
          />
        )}
        {isMobile ? null : <Aside state={localState} />}
      </section>
      <Button
        action={localState ? () => setState(3) : () => setLocalState(true)}
        content={localState ? "Submit" : "Next"}
        style={gloablButtonStyle}
      />
    </section>
  );
}

function PaymentMethod({ setState, isMobile }) {
  const [selectedOption, setSelectedOption] = useState("card");
  const [localState, setLocalState] = useState(false);
  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  let radioOptions = [
    { value: "card", label: "Credit/Debit Card" },
    { value: "bank", label: "Bank Transfer" },
  ];
  return (
    <section className={styles.PaymentMethod}>
      {" "}
      {isMobile ? (
        <MobilePointer position={position} index={1} />
      ) : (
        <Pointer position={position} index={1} />
      )}
      <div className={styles.paymentId}>
        <Span content="Payment ID - EDU2349856" style={{ color: "#7E7E80" }} />
        <i>
          Copy <RxCopy />
        </i>
      </div>
      <aside className={styles.paymentBox}>
        {!localState && (
          <RadioGroup
            options={radioOptions}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
          />
        )}
        {selectedOption === "card" ? (
          localState ? (
            <CompleteCardPayment isMobile={isMobile} />
          ) : (
            <CardPayment isMobile={isMobile} setLocalState={setLocalState} />
          )
        ) : (
          <BankPayment isMobile={isMobile} />
        )}
      </aside>
    </section>
  );
}

// Start of Sevis Validation Components
function Form1({ isMobile, radioOptions, selectedOption, handleOptionChange }) {
  return (
    <aside className={styles.Info}>
      <aside className={styles.ValidationInfo}>
        <div className={styles.header}>
          <GrValidate />
          <Paragraphs content="Validation Information" />
        </div>
        {isMobile ? <Note /> : null}
        <div
          className={styles.formType}
          style={{ marginTop: isMobile ? "1rem" : "" }}
        >
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
          <Input placeholder="Enter Sevis ID" label="Sevis ID" labelAfter="*" />
          <Input
            placeholder="Enter Last Name"
            label="Last Name"
            labelAfter="*"
          />
          <Input placeholder="Enter First & Second Name" label="Given Names" />
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
    </aside>
  );
}
function Form2({ isMobile }) {
  return (
    <aside className={styles.Info}>
      <aside className={styles.ValidationInfo}>
        <div className={styles.header}>
          <GrValidate />
          <Paragraphs content="Address Information" />
        </div>
        {isMobile ? <Note /> : null}
        <div className={styles.form}>
          <Input
            placeholder="Enter Address 1"
            label="Address 1"
            labelAfter="*"
          />
          <Input
            placeholder="Enter Address 2"
            label="Address 2"
            labelAfter="*"
          />
          <Input placeholder="State" label="Select State" labelAfter="*" />
          <Input placeholder="Select City" label="City" labelAfter="*" />
          <Input placeholder="Select Country" label="Country" labelAfter="*" />
        </div>
      </aside>
      <aside className={styles.ValidationInfo}>
        <div className={styles.header}>
          <GrValidate />
          <Paragraphs content="Documents Upload" />
        </div>
        <div className={styles.form} style={{ margin: "3rem 0 1.5rem" }}>
          <Span
            content="Please upload the following documents"
            style={{ color: "#696A6A", fontSize: "22px" }}
          />
          <Input
            placeholder={
              <>
                <Cloud />
                <span>
                  <i>Select a file</i> or drag and Drop .Jpg or .Png
                </span>
              </>
            }
            label="IS-19/DS 20"
            type="file"
          />
          <Input
            placeholder={
              <>
                <Cloud />
                <span>
                  <i>Select a file</i> or drag and Drop .Jpg or .Png
                </span>
              </>
            }
            label="Passport Photograph"
            type="file"
          />
          <Input
            placeholder={
              <>
                <Cloud />
                <span>
                  <i>Select a file</i> or drag and Drop .Jpg or .Png
                </span>
              </>
            }
            label="International Passport Data Page"
            type="file"
          />
        </div>
      </aside>
    </aside>
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
              {state ? <Document /> : <Person />}
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
// End of Sevis Validation Components

// Start of PaymentMethod components
function CardPayment({ isMobile, setLocalState }) {
  return (
    <div className={styles.CardPayment}>
      <div className={styles.Svg}>
        <MasterCard />
        <Visa />
        <Paypal />
      </div>
      <div
        className={styles.Note}
        style={{ padding: isMobile ? "12px" : "20px" }}
      >
        <div className={styles.top} style={{ alignItems: "flex-start" }}>
          <div className={styles.lock}>
            <Lock />
          </div>
          <Paragraphs
            content="We do not store any credit card Information and your payments are processed by world leading payment gateways"
            style={{ maxWidth: isMobile ? "90%" : "70%" }}
          />
        </div>
      </div>
      <div className={styles.cardForm}>
        <Input
          label="Card Name"
          placeholder="Enter Card Holders Name"
          labelAfter="*"
        />
        <Input
          label="Card Number"
          placeholder="0000 0000 0000"
          labelAfter="*"
        />
        <div className={styles.sensitiveCardInfo}>
          <div className={styles.expiry}>
            <Input label="Expiry Date" placeholder="Month" labelAfter="*" />
            <Input placeholder="Year" label="." />
          </div>
          <Input label="CVV" placeholder="123" labelAfter="*" />
        </div>
      </div>
      <div className={styles.InfoModal}>
        <InfoModal />
        Credit Card payments maight take up to 24 hours to be processed
      </div>
      <Button
        content="Next"
        action={() => setLocalState(true)}
        style={gloablButtonStyle}
      />
    </div>
  );
}
function CompleteCardPayment({ isMobile }) {
  let PaymentSummary = [
    { header: "Paying For", content: "SEVIS FEE(1-90)" },
    { header: "Form Fee", content: "$450.00" },
    { header: "Charge", content: "$120.00" },
    { header: "Total", content: "$670.00" },
  ];
  return (
    <div className={styles.CompleteCardPayment}>
      <PaymentsNote
        content="Kindly Double Check The Details Below Before You Click Pay"
        isMobile={isMobile}
      />
      <div className={styles.PaymentDetails}>
        <div className={styles.top}>
          <Span
            content={
              <>
                Payment Details
                <GrValidate />
              </>
            }
          />
          <i>Edit</i>
        </div>
        <div className={styles.bottom}>
          <div className={styles.cardDetails}>
            <MasterCard />
            <aside>
              {[1, 2, 3].map((Dots) => (
                <span className={styles.Dots} key={Dots}>
                  {[1, 2, 3, 4].map((Dot) => (
                    <i className={styles.dot} key={Dot}></i>
                  ))}
                </span>
              ))}
              <span className={styles.lastNum}>3584</span>
            </aside>
          </div>
          <Span content="Master Card" style={{ fontSize: "14px" }} />
        </div>
      </div>
      <div className={styles.PaymentSummary}>
        {" "}
        <div className={styles.top}>
          <Span content="Payment Summary" />
          <i>Edit</i>
        </div>
        <div className={styles.Details}>
          {PaymentSummary.map(({ header, content }) => (
            <div className={styles.Detail}>
              <Span content={header} style={{ color: "#A6A6A8" }} />{" "}
              <span>|</span> <Span content={content} />
            </div>
          ))}
        </div>
      </div>
      <Button content="Pay" style={gloablButtonStyle} />
    </div>
  );
}
function BankPayment({ isMobile }) {
  let Details = [
    { header: "Account Name", detail: "Educarts LLC" },
    { header: "Account Number", detail: "1234567890" },
    { header: "Bank Name", detail: "GTCO" },
    { header: "Account Type", detail: "Current" },
  ];
  return (
    <div className={styles.BankPayment}>
      <PaymentsNote
        content="Bank Transfer can take up to 15 minutes to be confirmed, Please check Your Payment Status to confirm your payment status"
        isMobile={isMobile}
      />
      <div className={styles.accountBox}>
        <div className={styles.box}>
          <Span content="Make a transfer to the account details below" />
          <div className={styles.Bank}>
            <GTBankLogo />
            <HighlightHeader content="Educarts LLC" />
          </div>
          <div className={styles.Details}>
            {Details.map(({ header, detail }) => (
              <div className={styles.Detail}>
                <Span content={header} style={{ color: "#A6A6A8" }} />{" "}
                <span>|</span> <Span content={detail} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button content="I Have Made Payments" style={gloablButtonStyle} />
    </div>
  );
}
function PaymentsNote({ content, isMobile }) {
  return (
    <div
      className={styles.Note}
      style={{ padding: isMobile ? "12px" : "20px", width: "min(400px, 100%)" }}
    >
      <div className={styles.top}>
        <div className={styles.lock}>
          <Timer />
        </div>
        <Paragraphs
          content={content}
          style={{ maxWidth: isMobile ? "90%" : "70%" }}
        />
      </div>
    </div>
  );
}

function Pointer({ position, index }) {
  let CircleStyle = { background: "#696A6A" };
  let scale = { scale: 0.7 };
  return (
    <div className={styles.Pointer}>
      {position.map((point, i) => (
        <div className={styles.Point} key={i}>
          <div className={styles.MainPointer}>
            <div
              className={styles.OuterCircle}
              style={index != i ? { ...scale, ...CircleStyle } : {}}
            >
              <div
                className={styles.InnerCircle}
                style={index != i ? CircleStyle : {}}
              >
                <span>{i + 1}</span>
              </div>
            </div>
            <Paragraphs content={point} />
          </div>
          {i != position.length - 1 && (
            <span className={styles.PointerLine}></span>
          )}
        </div>
      ))}
    </div>
  );
}
function MobilePointer({ position, index }) {
  return (
    <div className={styles.MobilePointer}>
      <div className={styles.Point}>
        <div className={styles.MainPointer}>
          <div className={styles.OuterCircle}>
            <div className={styles.InnerCircle}>
              <span>{index + 1}</span>
            </div>
          </div>
          <Paragraphs content={position[index]} />
        </div>
      </div>
    </div>
  );
}
