import React, { useState } from "react";
import Img1 from "../../assets/images/1.jpg";
import Img2 from "../../assets/images/2.jpg";
import Img3 from "../../assets/images/3.jpg";
import Img4 from "../../assets/images/4.jpg";
import Img5 from "../../assets/images/5.jpg";
import Img6 from "../../assets/images/6.jpg";

function PortfolioDesign(props) {
  const [imgs, setImgs] = useState([
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img1,
    Img3,
    Img2,
    Img2,
    Img5,
  ]);
  return (
    <div className="d-flex justify-center">
      <CircleImg imgs={imgs} />
    </div>
  );
}

function CircleImg({ imgs, style }) {
  const [limit, setLimit] = useState(5);
  const width = style ? (style.width ? style.width : "70px") : "70px";
  const height = style ? (style.height ? style.height : "70px") : "70px";
  const color = style ? (style.color ? style.color : "white") : "white";
  const backgroundColor = style
    ? style.backgroundColor
      ? style.backgroundColor
      : "blue"
    : "blue";

  return (
    <div className="d-flex ml-2">
      {imgs &&
        imgs.map((img, i) => {
          if (i > limit) {
            return;
          }
          if (i === limit && limit != imgs.length) {
            return (
              <div
                key={i}
                className="rounded-circle d-flex align-items-center justify-content-center p-0 font-bold "
                style={{
                  position: "relative",
                  width: width,
                  height: height,
                  backgroundColor: backgroundColor,
                  color: color,
                  marginLeft: i != 0 && "-40px",
                  border: "5px solid white",
                }}
                role={"button"}
                onClick={() => setLimit(imgs.length)}
              >
                <span style={{ fontSize: "21px" }}>
                  {"+" + (imgs.length - limit)}
                </span>
              </div>
            );
          }
          return (
            <div
              key={i}
              className="rounded-circle listImg"
              style={{
                position: "relative",
                width: width,
                height: height,
                marginLeft: i != 0 && "-40px",
                border: "5px solid white",
              }}
            >
              <img
                src={img}
                alt="ss"
                style={{ width: "100%", height: "100%" }}
                className="rounded-circle"
              />
            </div>
          );
        })}
      {limit == imgs.length && (
        <div className="d-flex align-items-center">
          <span
            style={{ fontSize: "25px" }}
            role={"button"}
            onClick={() => setLimit(5)}
          >
            &#10094;
          </span>
        </div>
      )}
      <br></br> <br></br>
      <div
      className="parentFlower"
        style={{
          width: "400px",
          height: "300px",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "200px",
              backgroundColor: "red",
              borderRadius: "48%",
              border: "3px solid black",
              position: "absolute",
              transform: "rotate(-35deg)",
            }}
          ></div>
          <div
            style={{
              width: "70px",
              height: "200px",
              backgroundColor: "red",
              borderRadius: "48%",
              border: "3px solid black",
              position: "absolute",
              transform: "rotate(90deg)",
            }}
          ></div>
          <div
            style={{
              width: "70px",
              height: "200px",
              backgroundColor: "red",
              borderRadius: "48%",
              border: "3px solid black",
              position: "absolute",
              transform: "rotate(35deg)",
            }}
          ></div>
        </div>

        <div
          style={{
            margin: "auto",
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            zIndex: 999,
            backgroundColor: "yellow",
            overflow: "hidden",
          }}
        >
          {" "}
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "5px",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "5px",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "5px",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "5px",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "5px",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "5px",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              marginTop: "5px",
              marginBottom: "5px",
              display: "block",
            }}
          ></span>
          <span
            style={{
              width: "100%",
              border: "1px solid black",
              display: "block",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDesign;
