import React, { useState } from "react";
import Link from "next/link";
import ReactResizeDetector from "react-resize-detector";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import ActiveLink from "components/shared/ActiveLink";
import Image from "next/image";
const BsNavLink = (props) => {
  const { href, title, className = "" } = props;
  return (
    <ActiveLink activeClassName="active" href={href}>
      <Link
        className={`nav-link port-navbar-link ${className}`}
        title={title}
      />
    </ActiveLink>
  );
};

const BsNavBrand = () => {
  return (
    <Link className="navbar-brand port-navbar-brand" href="/">
      <Image src="/img/dove-touch-icon.png" width={45} height={45} alt="logo" />
    </Link>
  );
};

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <Navbar
          className={`port-navbar port-default  ${className} ${
            width < 688 && isOpen ? "is-open" : "is-closed"
          }`}
          light
          expand="md"
        >
          <BsNavBrand />
          <NavbarToggler onClick={toggle} />

          <Collapse className="justify-content-end" isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink href="/projects" title="Projects" />
              </NavItem>
              {/* <NavItem className="port-navbar-item">
                <BsNavLink href="/cv" title="Cv" />
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
