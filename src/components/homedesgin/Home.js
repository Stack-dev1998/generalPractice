import React from "react";
import { Container } from "react-bootstrap";
import imm from '../../assets/images/main_watch.png'
import "./style.css";
function Home(props) {
  return (
    <div>
      <div className="home_page">
        <div className="crl1"></div>
        <div className="crl2"></div>
        <div className="crl3"></div>
        <div className="crl4"></div>
        <div className="crl5"></div>
        <div className="container d-flex justify-content-between align-items-center f_nav">
          <h3>Logo</h3>
          <ul className=" d-flex _nav ">
            <li>Home</li>
            <li>Team</li>
            <li>Faq</li>
            <li>Contact</li>
          </ul>
          <button>Download App</button>
        </div>
        <div className="container sect" style={{ zIndex: 999 }}>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h1>
                Shoping App for <br /> Gadgets and Gifts
              </h1>
              <h3>Clean and clear landing page with necessary stuff to create a new design projects.</h3>
              <button>Download App</button>
            </div>
            <div className="col-xs-12 col-sm-6">Images</div>
          </div>
        </div>
      </div>

      <div className="cc d-flex justify-content-between">
<img src={imm} />
          <h1>dasdada dad</h1>
      </div>
    </div>
  );
}

export default Home;
