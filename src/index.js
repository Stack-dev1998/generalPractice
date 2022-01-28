import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./components/sidebar/Sidebar";
import BottleIndex from "./components/bottles/index";
import Home from "./components/homedesgin/Home";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Navbar(props) {
  return (
    <div style={{backgroundColor:"black"}}>
      <Link to="/practice" style={{ marginLeft: "20px",color:"white" }}>
        Other Practice
      </Link>
      <Link to="/sidebar" style={{ marginLeft: "20px",color:"white" }}>
        Responsive Sidebar and Top bar
      </Link>
      <Link to="/bottle-desgin" style={{ marginLeft: "20px",color:"white" }}>
        Ice scream design
      </Link> <Link to="/home-design" style={{ marginLeft: "20px",color:"white" }}>
      Home page design
      </Link>
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/practice" element={<App />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/home-design" element={<Home />} />
        <Route path="/bottle-desgin" element={<BottleIndex />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
