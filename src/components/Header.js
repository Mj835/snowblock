import React from "react";
import Logo from "../assets/SnowBlock.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        to="home"
        smooth={true}
        offset={-150}
        duration={500}
      >
        <img src={Logo} alt="Logo" width={50} height={55} />
        <h1 style={{ marginLeft: 5 }}>SnowBlock</h1>
      </Link>

      <nav>
        <span>
          <Link
            style={{
              cursor: "pointer",
            }}
            to="why-us"
            smooth={true}
            offset={0}
            duration={500}
          >
            Why Us
          </Link>
        </span>
        <span>
          <Link
            style={{
              cursor: "pointer",
            }}
            to="what-we-do"
            smooth={true}
            offset={0}
            duration={500}
          >
            What We Do
          </Link>
        </span>
        <span>
          <Link
            style={{
              cursor: "pointer",
            }}
            to="team"
            smooth={true}
            offset={0}
            duration={500}
          >
            Team
          </Link>
        </span>
        <span>
          <Link
            style={{
              cursor: "pointer",
            }}
            to="contact-us"
            smooth={true}
            offset={0}
            duration={500}
          >
            Contact Us
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;
