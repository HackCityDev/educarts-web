import styles from "../styles/sign.module.css";
import HighlightHeader from "../components/General/HighlightHeader";
import Input from "../components/General/Input";
import Button from "../components/General/Button";
import Span from "../components/General/Span";
import { useEffect, useRef, useState } from "react";
import InfoModal from "../assets/InfoModal";
import useFooterInView from "../hooks/useFooterInView";
import ChatSupport from "../assets/ChatSupport";
export default function ResetPassword() {
  const [recoveryStage, setRecoveryStage] = useState(0);
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
    <main className={styles.ResetPassword}>
      <section className="Support" ref={supportRef}>
        <ChatSupport /> Help
      </section>
      {recoveryStage === 0 ? (
        <AccountRecovery setStage={setRecoveryStage} />
      ) : recoveryStage === 1 ? (
        <ForgotPassword setStage={setRecoveryStage} />
      ) : (
        <UpdatePassword />
      )}
    </main>
  );
}
export function AccountRecovery({ setStage }) {
  return (
    <main className={styles.SignUp}>
      <section className={styles.Main} style={{ width: "min(100%, 500px)" }}>
        <div className={styles.Header}>
          <HighlightHeader content="Password Reset" />
          <span className={styles.Eclipse}></span>
        </div>
        <Span content="Please enter your registered Email" />
        <Input placeholder="Enter Email" type="email" />
        <Button content="Next" action={() => setStage(1)} />
        <p>
          I remember my password <Span content="Log In" link="/signin" />
        </p>
      </section>
    </main>
  );
}
export function ForgotPassword({ setStage }) {
  return (
    <main className={styles.SignUp}>
      <section className={styles.Main} style={{ width: "min(100%, 500px)" }}>
        <div className={styles.Header}>
          <HighlightHeader content="Password Reset" />
          <span className={styles.Eclipse}></span>
        </div>
        <Span
          content={
            <>
              Please enter the code we sent to{" "}
              <Span style={{ fontSize: "24px" }} content="+234-8123-6511-79" />
            </>
          }
        />
        <Input placeholder="Enter Code" type="password" />
        <Button content="Next" action={() => setStage(2)} />
        <Span content="Forgot Password?" link="/reset-password" />
        <p>
          I remember my password <Span content="Log In" link="/signin" />
        </p>
      </section>
    </main>
  );
}
export function UpdatePassword() {
  const [complete, setComplete] = useState(false);
  return (
    <main className={styles.SignUp}>
      <section className={styles.Main} style={{ width: "min(100%, 500px)" }}>
        <div className={styles.Header}>
          <HighlightHeader content="Create a new Password" />
          <span className={styles.Eclipse}></span>
        </div>
        {complete && <SuccessfulResetModal />}
        <Span content="Create a new password you would easily remember" />
        <Input placeholder="Old Password" type="password" />
        <Input placeholder="Create New Password" type="password" />
        <Input placeholder="Re-enter New Password" type="password" />
        {complete ? (
          <Button
            content="Sign In"
            link="/signin"
            aStyle={{ width: "100%" }}
            style={{ margin: "0 auto" }}
          />
        ) : (
          <Button content="Confirm Password" action={() => setComplete(true)} />
        )}

        <Span content="Forgot Password?" link="/reset-password" />
        <p>
          I remember my password <Span content="Log In" link="/signin" />
        </p>
      </section>
    </main>
  );
}
export function SuccessfulResetModal() {
  return (
    <main className={styles.ResetPasswordModal}>
      <aside>
        <InfoModal />
        <div>
          <p>Password Reset Successful</p>
          <span>Please Login With Your New Password</span>
        </div>
      </aside>
    </main>
  );
}
