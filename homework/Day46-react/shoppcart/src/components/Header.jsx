import React, { useState } from "react";
import Menu from "../assets/svg/bars-solid.svg";
import CartIcon from "../assets/svg/cart-shopping-solid.svg";
import Close from "../assets/svg/xmark-solid.svg";
import { Link } from "react-router-dom";
import "./css/Header.css";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="" width="20px" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">NIKE</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login / Register</Link>
          </li>
          <li className="close">
            <img src={Close} alt="" width="20" onClick={menuToggle} />
          </li>
        </ul>
        <div className="nav-cart">
          <span>0</span>
          <Link to="/cart">
            <img src={CartIcon} alt="" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
