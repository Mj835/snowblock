import React from "react";
import Logo from "../assets/SnowBlock.png";
import { Link } from "react-scroll";
import { FaDiscord, FaTwitter } from "react-icons/fa";

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

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          <a href="#">
            <FaDiscord size={25} />
          </a>
          <a href="#">
            <FaTwitter size={25} style={{ marginLeft: 25 }} />
          </a>
        </span>
      </nav>
    </div>
  );
};

export default Header;
