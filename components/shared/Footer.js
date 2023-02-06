import Link from "next/link";
import Text from "components/Text";
import { SiGithub, SiLinkedin, SiTwitter, SiInstagram } from "react-icons/si";
import { MdMail } from "react-icons/md";

const links = [
  {
    url: "https://github.com/lruiz5",
    icon: SiGithub,
  },
  {
    url: "mailto:l.ruiz5@live.com",
    icon: MdMail,
  },
  {
    url: "https://linkedin.com/in/lruiz5",
    icon: SiLinkedin,
  },
  {
    url: "https://instagram.com",
    icon: SiInstagram,
  },
];

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        height: "100px",
        padding: "60px 20px 100px",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "0",
        left: "0",
      }}
    >
      <div style={{ padding: "25px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Link className="footer-link fw-bold px-3" href="/">
            Home
          </Link>
          <Link className="footer-link fw-bold px-3" href="/about">
            About
          </Link>
          <Link className="footer-link fw-bold px-3" href="/projects">
            Projects
          </Link>
          <Link
            className="footer-link fw-bold px-3"
            href="mailto:hello@shellbear.me"
          >
            Contact
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "30px",
          marginBottom: "30px",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        {links.map(({ url, icon: Icon }) => (
          <Link
            className="footer-link "
            key={url}
            target="_blank"
            opacity={0.7}
            href={url}
          >
            <Icon size={22} />
          </Link>
        ))}
      </div>
      <Text margin={0} fontSize="0.9rem" color="rgba(0, 0, 0, 0.7)">
        © {new Date().getFullYear()} Luis Ruiz
      </Text>
    </footer>
  );
};

export default Footer;
