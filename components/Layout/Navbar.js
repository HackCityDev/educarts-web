import Link from "next/link";
import Logo from "../../assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";
import useMQ from "../../hooks/useMQ";
import Button from "../General/Button";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Navbar({ setOpenHamburger, openHamburger }) {
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
          {openHamburger ? (
            <VscChromeClose onClick={() => setOpenHamburger(false)} />
          ) : (
            <RxHamburgerMenu onClick={() => setOpenHamburger(true)} />
          )}
        </aside>
      ) : (
        <Links setOpenHamburger={setOpenHamburger} />
      )}
    </nav>
  );
}
export function Links({ setOpenHamburger }) {
  let router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      if (setOpenHamburger) setOpenHamburger(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);
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
  { name: "Payments", url: "/payments" },
  { name: "How it works", url: "/how-it-works" },
  { name: "Contact us", url: "/contact" },
];
export let isPath = {
  fontWeight: "600",
  borderBottom: "2px solid #17324f",
};
