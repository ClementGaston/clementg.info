import React, { useEffect, useState } from "react";
import DisplayLinks from "../displayLinks/DisplayLinks";
import links from './Links.json'
import "./NavBar.scss";

function NavBar() {
  const [navMode, setNavMode] = useState("absolute");

  const toggle = () => setNavMode(navMode !== "develop" ? "develop" : window.scrollY > 0 ? "sticky" : "absolute")

  useEffect(() => {
    window.addEventListener("scroll", () => setNavMode(window.scrollY > 0 ? "sticky" : "absolute"))
  }, []);

  return (
    <nav id="navBar" className={navMode}>
    <h2>Clément GASTON</h2>
      <DisplayLinks links={links}/>
      <div className="toggle" onClick={toggle}></div>
    </nav>
  );
}

export default NavBar;