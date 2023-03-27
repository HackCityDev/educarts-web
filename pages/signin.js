import styles from "../styles/sign.module.css";
import Logo from "../assets/Logo";
import HighlightHeader from "../components/General/HighlightHeader";
import Input from "../components/General/Input";
import Button from "../components/General/Button";
import ChatSupport from "../assets/ChatSupport";
import Span from "../components/General/Span";
export default function SignIn() {
  return (
    <main className={styles.SignIn}>
      <section className={styles.SignInCover}></section>
      <section className={styles.Logo}>
        <Logo />
      </section>{" "}
      <section className={styles.Support}>
        <ChatSupport /> Help
      </section>
      <section className={styles.Main}>
        <HighlightHeader content="Sign In" />
        <Input placeholder="Email" />
        <Input placeholder="Enter Password" />
        <Button content="Sign In" />
        <Span content="Forgot Password?" />
        <p>
          Dont have an account? <Span content="Sign Up" />
        </p>
      </section>
    </main>
  );
}
