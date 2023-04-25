import { useState } from "react";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import Navbar, { Links } from "./Navbar";
export default function Layout({ children }) {
  const [openHamburger, setOpenHamburger] = useState(false);
  return (
    <main className={styles.Layout}>
      <Navbar
        setOpenHamburger={setOpenHamburger}
        openHamburger={openHamburger}
      />
      {openHamburger && <Sidebar setOpenHamburger={setOpenHamburger} />}
      {children}
      <Footer />
    </main>
  );
}
export function Sidebar({ setOpenHamburger }) {
  return (
    <div className={styles.Sidebar}>
      <Links setOpenHamburger={setOpenHamburger} side={true} />
    </div>
  );
}
