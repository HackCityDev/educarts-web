import styles from "../styles/sign.module.css";
import HighlightHeader from "../components/General/HighlightHeader";
import Input from "../components/General/Input";
import Button from "../components/General/Button";
import Span from "../components/General/Span";
export default function SignUp() {
  return (
    <main className={styles.SignUp}>
      <section className={styles.Main}>
        <div className={styles.Header}>
          <HighlightHeader content="Sign Up" />
          <span className={styles.Eclipse}></span>
        </div>
        <Input placeholder="Enter First Name" label="First Name" />
        <Input placeholder="Enter Last Name" label="Last Name" />
        <Input label="Phone Number" type="number" before={true} />
        <Input placeholder="Create Password" label="Password" type="password" />
        <div className={styles.Checkbox}>
          <input type="checkbox" />
          <Span
            content={
              <>
                By clicking Next you agree with our Terms and Conditions and our{" "}
                <a> Privacy Policy</a>
              </>
            }
          />
        </div>
        <Button content="Next" />
        <Span content="Forgot Password?" />
        <p>
          I remember my password <Span content="Log In" />
        </p>
      </section>
    </main>
  );
}
