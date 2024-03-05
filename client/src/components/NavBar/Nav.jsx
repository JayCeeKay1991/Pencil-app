import { Link } from "react-router-dom";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";


import logo from "../../assets/logo.svg";
import artists from "../../assets/artists.svg";
import projects from "../../assets/projects.svg";
import "./Nav.css";
import { useState } from "react";

export function Nav() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <nav
      className="nav"
      // style={{ width: isHovered ? "200px" : "50px" }}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <ul>
        <li className="logo">
          {/* <Link to="/"> */}
            <img src={logo} className="nav-icon" alt="Logo" />
          {/* </Link> */}
        </li>
        <li>
          <Link to="/artistList">
            <IoPersonAddOutline style={{ color: "white" }} size={30} />
          </Link>
        </li>
        <li>
          <Link to="/projectList">
            <IoFolderOpenOutline style={{ color: "white" }} size={30} />
          </Link>
        </li>

        <li className="dark-mode">
          <IoIosMenu style={{ color: "white" }} size={30} />
        </li>
      </ul>
    </nav>
  );
}
// {/* <img src={artists} className="nav-icon" alt="Artists" /> */}
