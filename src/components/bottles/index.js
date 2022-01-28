import React, { useState } from "react";
import logo from "../../assets/bottles/logo.png";
import img1 from "../../assets/bottles/img1.png";
import img2 from "../../assets/bottles/img2.png";
import img3 from "../../assets/bottles/img3.png";
import thumb1 from "../../assets/bottles/thumb1.png";
import thumb2 from "../../assets/bottles/thumb2.png";
import thumb3 from "../../assets/bottles/thumb3.png";
import facebook from "../../assets/bottles/facebook.png";
import instagram from "../../assets/bottles/instagram.png";
import twitter from "../../assets/bottles/twitter.png";
import "./style.css";
function Index(props) {
  const [activeImg, setActiveImg] = useState({ img: img1, bgColor: "#017143" });
  return (
    <div>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="circle1"
          style={{ backgroundColor: activeImg.bgColor }}
        ></div>
        <div className="d-flex  justify-content-between align-items-center p-4">
          <img src={logo} />
          <div className="d-flex">
            <a href="#" style={{ color: "black", textDecoration: "none" }}>
              Home
            </a>
            <a
              href="#"
              style={{
                color: "black",
                marginLeft: "10px",
                textDecoration: "none",
              }}
            >
              Menu
            </a>
            <a
              href="#"
              style={{
                color: "black",
                marginLeft: "10px",
                textDecoration: "none",
              }}
            >
              What's New
            </a>
            <a
              href="#"
              style={{
                color: "black",
                marginLeft: "10px",
                textDecoration: "none",
              }}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="p-4 d-flex align-items-center justify-content-between contents">
          <div className="text_box">
            <h2>
              It's not just cofee <br /> its's <span>Starbucks</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique, sem non mattis luctus, leo erat cursus eros, ut
              pharetra leo elit id nulla. Pellentesque in magna nec ipsum
              egestas venenatis. Fusce tristique pharetra malesuada. Nulla eu
              lacus cursus, mattis nulla quis, tempus mauris. Donec turpis nibh,
              auctor nec lacinia eu, cursus ut metus. Vivamus sed dictum nibh.
              Etiam vestibulum tempor enim.
            </p>
            <button>Learn More</button>
          </div>
          <div className="img_box">
            <img className="img-fluid" src={activeImg.img} />
          </div>
        </div>
        <div className="d-flex justify-content-center thumbs">
          <img
            className="img-fluid"
            src={thumb1}
            onClick={() => setActiveImg({ img: img1, bgColor: "#017143" })}
          />
          <img
            className="img-fluid"
            src={thumb2}
            onClick={() => setActiveImg({ img: img2, bgColor: "#eb7495" })}
            style={{ marginLeft: "10px", marginRight: "10px" }}
          />
          <img
            className="img-fluid"
            src={thumb3}
            onClick={() => setActiveImg({ img: img3, bgColor: "#d752b1" })}
          />
        </div>
        <div className="icons">
          <ul>
            <li>
              <img src={facebook} />
            </li>
            <li className="mt-4 mb-4">
              <img src={instagram} />
            </li>
            <li>
              <img src={twitter} />
            </li>
          </ul>
        </div>
      </div>

      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
      <h2>sdfsdf</h2>
    </div>
  );
}

export default Index;
