import Link from "next/link";
import Logo from "../../assets/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import useMQ from "../../hooks/useMQ";
import Button from "../General/Button";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";

export default function Navbar() {
  const isMobile = useMQ("(max-width: 900px)");
  let router = useRouter();
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
          <RxHamburgerMenu />
        </aside>
      ) : (
        <>
          <aside className={styles.Weblinks}>
            {webLinks.map((link) => (
              <Link href={link.url} key={link.url}>
                <a
                  className={styles.Weblink}
                  style={router.route === link.url ? isPath : {}}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </aside>
          <aside className={styles.CallToActionButtons}>
            <Button oppose={true} content="Log In" link="/signin" />
            <Button content="Sign Up" link="/signup" />
          </aside>
        </>
      )}
    </nav>
  );
}
export function Sidebar() {
  return <div></div>;
}
const webLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Payments", url: "/payments" },
  { name: "How it works", url: "/how-it-works" },
  { name: "Contact us", url: "/contact" },
];
let isPath = {
  fontWeight: "600",
  borderBottom: "2px solid #17324f",
};
const dropDown = [
  { name: "Visa Payments", link: "/visa_payments" },
  { name: "Application Fee", link: "/application_fee" },
  { name: "Credential", link: "/credentials" },
  { name: "Admission doc", link: "/admission_doc" },
  { name: "SEVIS Fee", link: "/sevis" },
  { name: "Track Payment", link: "/track_payment" },
  { name: "Others", link: "/others" },
];
