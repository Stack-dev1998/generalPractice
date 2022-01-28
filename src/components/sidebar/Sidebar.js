import React, { useState, useEffect } from "react";
import "../sidebar/style.css";
import useWindowDimensions from "../../utilities/getWindowDimention";
import Logo from "../../assets/images/Logo.svg";
function Sidebar(props) {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [topbarMenu, setTopbarMenu] = useState(false);
  let size = useWindowDimensions();

  useEffect(() => {
    size.width > 450 ? setSidebarMenu(true) : setSidebarMenu(false);
    size.width > 450 ? setTopbarMenu(true) : setTopbarMenu(false);
  }, [size]);
  
  return (
    <div className="whole_div">
      <div className="nav_bar">
        {size.width <= 450 && (
          <span
            className="humburger_icon pl-2"
            onClick={() => setSidebarMenu(!sidebarMenu)}
          >
            {sidebarMenu ? <span>&#10005; </span> : <span>&#9776;</span>}
          </span>
        )}
        {!topbarMenu && <img src={Logo} className="my-auto " />}
        {topbarMenu && (
          <div className="nav text-center">
            <img src={Logo} />
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        )}
        {size.width <= 450 && (
          <span
            className="humburger_icon"
            onClick={() => setTopbarMenu(!topbarMenu)}
          >
            {topbarMenu ? <span>&#10005; </span> : <span>&#9776;</span>}
          </span>
        )}
      </div>
      <div className="parent_div">
        {sidebarMenu && (
          <div className={`side_bar `}>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> How to write map function
              in reactjs
            </a>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> javascript tutorial
            </a>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> Nodejs introduction
            </a>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> C# introduction
            </a>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> How to add two number in
              javascript
            </a>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> String concatination
            </a>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> How to add two arrays
            </a>
            <a href="#" className="p-1 d-block">
              <span className="pr-2">&#10048;</span> What is let, const and var
              in javascript
            </a>
          </div>
        )}
        <div className="main_section">
          
            <p>
              This sidebar is of full height (100%) and always shown. Scroll
              down the page to see the result. Some text to enable scrolling..
              Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset
            </p>
            concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur
            ius te, id agam omnis evertitur eum. Affert laboramus repudiandae
            nec
            <p>
              et. Inciderint e fficiantur his ad. Eum no molestiae voluptatibus.
              Some text to enable scrolling.
            </p>
            <p>
              L orem ipsum dolor sit amet, illum definition es no quo, ma set
              concludaturque et um, altera fabulas ut quo. Atqui causae
              gloriatur ius te, id agam omnis evertitur eum.
            </p>
            <p>
              Affert laboramus repudiandae nec Inciderint efficiantur his ad.
              Eum no molestiae vo ptatibus. Some text to e scrolling.. Lorem
              ipsum dolor sit amet, illum definitiones no quo, maluisset conclu
              urque et eu m, altera fabulas ut quo. A qui causae gloriatur ius
              te, id agam omnis evertitur eum. Affert lab r ramus repudiandae
              nec et. Incider fficiantur his ad.
            </p>
            <p>
              Eum no molestiae voluptatibus. Some text enable scrolling. Lorem
              ipsum dolor sit a t, illum definitiones no quo, maluisset
              concludaturque et eum, altera fabulas ut quo. At qui caus e
              gloriatur iu te, id agam omnis evertitur eum. Affert laboramus
              repudiandae nec et. Inciderint efficiantur his ad. Eum no
              molestiae voluptatibus.
            </p>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
