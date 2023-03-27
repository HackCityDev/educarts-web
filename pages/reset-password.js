import styles from "../styles/sign.module.css";
import HighlightHeader from "../components/General/HighlightHeader";
import Input from "../components/General/Input";
import Button from "../components/General/Button";
import Span from "../components/General/Span";
export default function ResetPassword() {
  return <UpdatePassword />;
}
export function ForgotPassword() {
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
        <Input placeholder="Enter Code" />
        <Button content="Next" />
        <Span content="Forgot Password?" />
        <p>
          I remember my password <Span content="Log In" />
        </p>
      </section>
    </main>
  );
}
export function UpdatePassword() {
  return (
    <main className={styles.SignUp}>
      <section className={styles.Main} style={{ width: "min(100%, 500px)" }}>
        <div className={styles.Header}>
          <HighlightHeader content="Create a new Password" />
          <span className={styles.Eclipse}></span>
        </div>
        <Span content="Create a new password you would easily remember" />
        <Input placeholder="Old Password" />
        <Input placeholder="Create New Password" />
        <Input placeholder="Re-enter New Password" />
        <Button content="Next" />
        <Span content="Forgot Password?" />
        <p>
          I remember my password <Span content="Log In" />
        </p>
      </section>
    </main>
  );
}
