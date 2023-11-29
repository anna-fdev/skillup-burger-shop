import React, { useEffect, useState } from "react";
import { GiHamburger } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myorders" },
      { name: "Logout", path: "/login" },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div className="header">
      <Navbar
        collapseOnSelect
        expand="md"
        className="bg-body-tertiary nav-custom"
        expanded={expanded}
      >
        <Navbar.Brand as={Link} to="/">
          <GiHamburger />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="collapse">
          <Nav>
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" onClick={() => setExpanded(false)}>
              Shopping Cart
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              title="Menu"
              id="collapsible-nav-dropdown"
              className="navbar-custom"
            >
              {navLinks.map((d, i) => (
                <NavDropdown.Item
                  as={Link}
                  to={d.path}
                  key={i}
                  onClick={() => setExpanded(false)}
                >
                  {d.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
