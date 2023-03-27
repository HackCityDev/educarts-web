import styles from "../styles/sign.module.css";
import HighlightHeader from "../components/General/HighlightHeader";
import Input from "../components/General/Input";
import Button from "../components/General/Button";
import Span from "../components/General/Span";
export default function ResetPassword() {
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
