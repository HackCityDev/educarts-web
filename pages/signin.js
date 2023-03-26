import styles from "../styles/signin.module.css";
import Logo from "../assets/Logo";
import HighlightHeader from "../components/General/HighlightHeader";
import Input from "../components/General/Input";
import Button from "../components/General/Button";
import Support from "../assets/Support";
export default function SignIn() {
  return (
    <main className={styles.SignIn}>
      <section className={styles.SignInCover}></section>
      <section className={styles.Logo}>
        <Logo />
      </section>{" "}
      <section className={styles.Support}>
        <Support />
      </section>
      <section className={styles.Main}>
        <HighlightHeader content="Sign In" />
        <Input placeholder="Email" />
        <Input placeholder="Enter Password" />
        <Button content="Sign In" />
        <span>Forgot Password?</span>
        <p>
          Don't have an account? <span>Sign Up</span>
        </p>
      </section>
    </main>
  );
}
