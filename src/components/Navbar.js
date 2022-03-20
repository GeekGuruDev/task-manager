import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);
  return (
    <nav className="nav">
      <div className="nav-header">
        <button
          className="nav-toggle"
          onClick={() => {
            setShowNavlinks(!showNavlinks);
          }}
        >
          {showNavlinks ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <h1 className="logo">Task Manager</h1>
      </div>
      <ul className={`nav-links ${showNavlinks ? "show-links" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
