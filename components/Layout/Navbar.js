import Link from "next/link";
import Logo from "../../assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrFormDown } from "react-icons/gr";
import useMQ from "../../hooks/useMQ";
import Button from "../General/Button";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Down from "../../assets/ArrowDown";

export default function Navbar({ setOpenHamburger }) {
  const isMobile = useMQ("(max-width: 900px)");
  return (
    <nav className={styles.Navbar}>
      <aside className={styles.Logo}>
        <Link href="/">
          <a>
            <Logo width="150px" />
          </a>
        </Link>
      </aside>
      {isMobile ? (
        <aside className={styles.Hamburger}>
          <RxHamburgerMenu onClick={() => setOpenHamburger(true)} />
        </aside>
      ) : (
        <Links />
      )}
    </nav>
  );
}
export function Links() {
  const [openDropdown, setOpenDropdown] = useState(false);
  let router = useRouter();
  let dropdownRef = useRef(null);
  useEffect(() => {
    let handler = (e) => {
      try {
        if (!dropdownRef.current?.contains(e.target)) {
          setOpenDropdown(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <aside className={styles.Weblinks}>
        {webLinks.map((link) => (
          <Link href={link.url} key={link.url}>
            <a style={router.route === link.url ? isPath : {}}>{link.name}</a>
          </Link>
        ))}
      </aside>
      <aside className={styles.CallToActionButtons}>
        <Button oppose={true} content="Log In" link="/signin" />
        <Button content="Sign Up" link="/signup" />
      </aside>
    </>
  );
}
export const webLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Payments", url: "payments" },
  { name: "How it works", url: "/how-it-works" },
  { name: "Contact us", url: "/contact" },
];
export let isPath = {
  fontWeight: "600",
  borderBottom: "2px solid #17324f",
};
export const dropDown = [
  { name: "Visa Payments", link: "/visa_payments" },
  { name: "Application Fee", link: "/application_fee" },
  { name: "Credential", link: "/credentials" },
  { name: "Admission doc", link: "/admission_doc" },
  { name: "SEVIS Fee", link: "/sevis" },
  { name: "Track Payment", link: "/track_payment" },
  { name: "Others", link: "/others" },
];
