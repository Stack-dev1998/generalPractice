import React, { useState } from "react";
import "./style.css";
function ClipPath(props) {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <div>
      <div className="contain">
        <div className="inner">
          <span className="">i</span>
          <h1>Hi</h1>
          <p>
            This is paragraph for you. HTML is not progarming language.This is
            paragraph for you. HTML is not progarming language
          </p>
        </div>
      </div>
      <div className="nav " >
        <li
          className={`p-2 ${activeLink === "home" && "active_li"}`}
          onClick={() => setActiveLink("home")}
        >
          Home {activeLink === "home" && <div className="circle_icon"></div>}
        </li>
        <li
          className={`p-2 ${activeLink === "about" && "active_li"}`}
          onClick={() => setActiveLink("about")}
        >
          About{activeLink === "about" && <div className="circle_icon"></div>}
        </li>
        <li
          className={`p-2 ${activeLink === "contact" && "active_li"}`}
          onClick={() => setActiveLink("contact")}
        >
          Contact {activeLink === "contact" && <div className="circle_icon"></div>}
        </li>
        <li
          className={`p-2 ${activeLink === "products" && "active_li"}`}
          onClick={() => setActiveLink("products")}
        >
          Products {activeLink === "products" && <div className="circle_icon"></div>}
        </li>
      </div>
    </div>
  );
}

export default ClipPath;
