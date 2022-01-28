import React, { useEffect, useState } from "react";

var myJSONCategories = {
  categories: [
    {
      ic_id: "100",
      ic_disp_val: "Campaigns",
      ic_sub: 1,
      ic_sub_categories: [
        {
          ic_id: "120",
          ic_disp_val: "Campaigns sub categorist",
          ic_sub: 1,
          ic_sub_categories: [
            {
              ic_id: "121",
              ic_disp_val: "camp 1",
              ic_sub: 0,
              ic_sub_categories: [
                {
                  ic_id: "122",
                  ic_disp_val: "child 1 of camp 1",
                  ic_sub: 0,
                },
                {
                  ic_id: "123",
                  ic_disp_val: "child 2 of camp 1",
                  ic_sub: 0,
                },
              ],
            },
            {
              ic_id: "100119",
              ic_disp_val: "camp 2",
              ic_sub: 0,
            },
            {
              ic_id: "100120",
              ic_disp_val: "camp 3",
              ic_sub: 0,
            },
          ],
        },
      ],
    },
    {
      ic_id: "200",
      ic_disp_val: "Products",
      ic_sub: 1,
      ic_sub_categories: [
        {
          ic_id: "210",
          ic_disp_val: "cxtest",
          ic_sub: 1,
          ic_sub_categories: [
            {
              ic_id: "211",
              ic_disp_val: "camp 1",
              ic_sub: 0,
            },
            {
              ic_id: "212",
              ic_disp_val: "camp 2",
              ic_sub: 0,
            },
            {
              ic_id: "213",
              ic_disp_val: "camp 3",
              ic_sub: 0,
            },
          ],
        },
      ],
    },
    {
      ic_id: "300",
      ic_disp_val: "Campaigns / Products",
      ic_sub: 1,
      ic_sub_categories: [
        {
          ic_id: "310",
          ic_disp_val: "cxtest",
          ic_sub: 1,
          ic_sub_categories: [
            {
              ic_id: "311",
              ic_disp_val: "camp 1",
              ic_sub: 1,
              ic_sub_categories: [
                {
                  ic_id: "3111",
                  ic_disp_val: "new added 1",
                  ic_sub: 0,
                },
              ],
            },
            {
              ic_id: "312",
              ic_disp_val: "camp 2",
              ic_sub: 0,
            },
            {
              ic_id: "313",
              ic_disp_val: "camp 3",
              ic_sub: 0,
            },
          ],
        },
      ],
    },
  ],
};

// function addCategories(obj) {
//   var htmlBuilder = "";
//   for (var i = 0; i < obj.length; i++) {
//     htmlBuilder += "<li>" + obj[i].ic_disp_val;

//     if (obj[i].ic_sub == 1) {
//       htmlBuilder += "<ul>";
//       htmlBuilder += addCategories(obj[i].ic_sub_categories);
//       htmlBuilder += "</ul>";
//     }
//     htmlBuilder += "</li>";
//   }
//   console.log(htmlBuilder);
//   const a = `<ul> ${htmlBuilder} </ul> `;
//   return a;
// }

let folderClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-folder"
    viewBox="0 0 16 16"
  >
    <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
  </svg>
);
let folderOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-folder2-open"
    viewBox="0 0 16 16"
  >
    <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z" />
  </svg>
);

 

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <span>
        <span onClick={() => setIsActive(!isActive)}>
          {isActive ? folderOpen : content && folderClose}
        </span>

        {title}
      </span>

      {isActive && (
        <div className="accordion-content">
          {content && <ShowList content={content} />}
        </div>
      )}
    </div>
  );
};

function ShowList({ content }) {
  return (
    <ul>
      {content.map((b) => {
        return (
          <li key={b.ic_id}>
            <Accordion
              title={b.ic_disp_val}
              content={b.ic_sub_categories ? b.ic_sub_categories : null}
            />
          </li>
        );
      })}
    </ul>
  );
}

const NestedList = (props) => {
  return (
    <div>
      <ShowList content={myJSONCategories.categories} />
    </div>
  );
};

export default NestedList;
