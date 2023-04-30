import styles from "../../styles/sign.module.css";
import HighlightHeader from "../../components/General/HighlightHeader";
import User from "../../assets/User";
import Institution from "../../assets/Institution";
import Span from "../../components/General/Span";
import Input from "../../components/General/Input";
import Button from "../../components/General/Button";
import Link from "next/link";
import Nigeria from "../../assets/Nigeria";
import useFooterInView from "../../hooks/useFooterInView";
import { useEffect, useRef } from "react";
import ChatSupport from "../../assets/ChatSupport";

export default function SignUp() {
  return (
    <main>
      <SelectAccountType />
    </main>
  );
}
export function SelectAccountType() {
  let bottom = useFooterInView();
  let supportRef = useRef(null);
  function removeFixedPosition() {
    if (supportRef.current && bottom) {
      supportRef.current.style.position = "absolute";
    } else {
      supportRef.current.style.position = "fixed";
    }
  }
  useEffect(removeFixedPosition, [bottom]);
  return (
    <main className={styles.SignUp}>
      <section className="Support" ref={supportRef}>
        <ChatSupport /> Help
      </section>
      <section className={styles.Main} style={{ width: "100%" }}>
        <div className={styles.Header}>
          <HighlightHeader content="Choose an Account Type to Get Started" />
          <span className={styles.Eclipse}></span>
        </div>
        <aside className={styles.Selectors}>
          <Link href="/signup/personal">
            <a>
              <User />
              <Span content="Personal Account" />
            </a>
          </Link>
          <Link href="/signup/institution">
            <a>
              <Institution />
              <Span content="Institution Account" />
            </a>
          </Link>
        </aside>
      </section>
    </main>
  );
}

export function SignUpPage({ accountType }) {
  let bottom = useFooterInView();
  let supportRef = useRef(null);
  function removeFixedPosition() {
    if (supportRef.current && bottom) {
      supportRef.current.style.position = "absolute";
    } else {
      supportRef.current.style.position = "fixed";
    }
  }
  useEffect(removeFixedPosition, [bottom]);
  return (
    <main className={styles.SignUp}>
      <section className="Support" ref={supportRef}>
        <ChatSupport /> Help
      </section>
      <section className={styles.Main}>
        <div className={styles.Header}>
          <HighlightHeader content="Sign Up" />
          <span className={styles.Eclipse}></span>
        </div>
        <Input
          placeholder="Enter First Name"
          label="First Name"
          labelAfter="*"
        />
        <Input placeholder="Enter Last Name" label="Last Name" labelAfter="*" />
        <Input
          placeholder="Enter Email"
          label="email"
          type="email"
          labelAfter="*"
        />
        {accountType && (
          <Input
            placeholder="Select Institution"
            label="Institution"
            labelAfter="*"
          />
        )}
        <Input
          label="Phone Number"
          type="tel"
          before={
            <>
              <Nigeria /> <i>+234</i>
            </>
          }
        />
        <Input
          placeholder="Create Password"
          label="Password"
          type="password"
          labelAfter="*"
        />
        <div className={styles.Checkbox}>
          <input type="checkbox" />
          <Span
            content={
              <>
                By clicking Next you agree with our Terms and Conditions and our
                <a> Privacy Policy</a>
              </>
            }
          />
        </div>
        <Button
          content="Next"
          link="/signup/confirmemail"
          aStyle={{ width: "100%" }}
          style={{ margin: "0 auto" }}
        />
        <Span content="Forgot Password?" link="/reset-password" />
        <p>
          I remember my password <Span content="Log In" link="/signin" />
        </p>
      </section>
    </main>
  );
}
export function ConfirmEmail() {
  let bottom = useFooterInView();
  let supportRef = useRef(null);
  function removeFixedPosition() {
    if (supportRef.current && bottom) {
      supportRef.current.style.position = "absolute";
    } else {
      supportRef.current.style.position = "fixed";
    }
  }
  useEffect(removeFixedPosition, [bottom]);
  return (
    <main className={styles.SignUp}>
      <section className="Support" ref={supportRef}>
        <ChatSupport /> Help
      </section>
      <section className={styles.Main}>
        <div className={styles.Header}>
          <HighlightHeader content="Confirm Code" />
          <span className={styles.Eclipse}></span>
        </div>
        <Span
          content="We have sent a code to the email you provided, Please Input the code below"
          style={{ textAlign: "center" }}
        />
        <Input placeholder="Enter Code" type="password" />

        <Button content="Complete" />
        <Span content="Forgot Password?" link="/reset-password" />
        <p>
          I remember my password <Span content="Log In" link="/signin" />
        </p>
      </section>
    </main>
  );
}
