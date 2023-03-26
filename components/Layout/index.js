import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";
export default function Layout({ children }) {
  return (
    <main className={styles.Layout}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
