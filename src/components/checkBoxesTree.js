import React, { useEffect, useState } from "react";

let categories = [
  {
    ic_id: "100",
    ic_disp_val: "Campaigns",
    isChecked: false,
    ic_sub_categories: [
      {
        ic_id: "120",
        ic_disp_val: "Campaigns sub categorist",
        isChecked: false,
        ic_sub_categories: [
          {
            ic_id: "121",
            ic_disp_val: "camp 1",
            isChecked: false,
            ic_sub_categories: [
              {
                ic_id: "1211",
                ic_disp_val: "child 1 of camp 1",
                isChecked: false,
              },
              {
                ic_id: "1212",
                ic_disp_val: "child 2 of camp 1",
                isChecked: false,
              },
            ],
          },
          {
            ic_id: "122",
            ic_disp_val: "camp 2",
            isChecked: false,
          },
          {
            ic_id: "123",
            ic_disp_val: "camp 3",
            isChecked: false,
          },
        ],
      },
    ],
  },
  {
    ic_id: "200",
    ic_disp_val: "Products",
    isChecked: false,
    ic_sub_categories: [
      {
        ic_id: "210",
        ic_disp_val: "cxtest",
        isChecked: false,
        ic_sub_categories: [
          {
            ic_id: "211",
            ic_disp_val: "camp 1",
            isChecked: false,
          },
          {
            ic_id: "212",
            ic_disp_val: "camp 2",
            isChecked: false,
          },
          {
            ic_id: "213",
            ic_disp_val: "camp 3",
            isChecked: false,
          },
        ],
      },
    ],
  },
  {
    ic_id: "300",
    ic_disp_val: "Products",
    isChecked: false,
    ic_sub_categories: [
      {
        ic_id: "310",
        ic_disp_val: "cxtest",
        isChecked: false,
        ic_sub_categories: [
          {
            ic_id: "311",
            ic_disp_val: "camp 1",
            isChecked: false,
            ic_sub_categories: [
              {
                ic_id: "3111",
                ic_disp_val: "new added 1",
                isChecked: false,
              },
            ],
          },
          {
            ic_id: "312",
            ic_disp_val: "camp 2",
            isChecked: false,
          },
          {
            ic_id: "313",
            ic_disp_val: "camp 3",
            isChecked: false,
          },
        ],
      },
    ],
  },
];

let items = [
  {
    id: "1",
    name: "Item 1",
    isChecked: true,
    children: [],
  },
  {
    id: "2",
    name: "Item 2",
    isChecked: false,
    children: [
      {
        id: "2.1",
        name: "Child 1",
        isChecked: true,
        children: [],
      },
      {
        id: "2.2",
        name: "Child 2",
        isChecked: false,
        children: [
          {
            id: "2.2.1",
            name: "grand Child 1",
            isChecked: true,
            children: [],
          },
        ],
      },
    ],
  },
   
];

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

function showList(list) {
  return (
    <ul>
      <Accordion>
        {list.map((b) => {
          return (
            <li role="button">
              <Accordion.Item eventKey={b.ic_id} className="border-0">
                {b.ic_sub_categories ? (
                  <Accordion.Header>{b.ic_disp_val} :</Accordion.Header>
                ) : (
                  <li> {b.ic_disp_val} </li>
                )}

                {b.ic_sub_categories && (
                  <li>
                    <Accordion.Body>
                      {showList(b.ic_sub_categories)}
                    </Accordion.Body>
                  </li>
                )}
              </Accordion.Item>
            </li>
          );
        })}
      </Accordion>
    </ul>
  );
}

let filter = (array) => {
  console.log("called ;", array);
  let f = "";
  if (array.ic_sub_categories) {
    f = array.ic_sub_categories.map((item, i) => {
      if (item.ic_sub_categories) {
        return {
          ...item,
          isChecked: true,
          ic_sub_categories: filter(item.ic_sub_categories),
        };
      }
    });
    return f;
  } else {
    return { ...array, isChecked: true };
  }
};
const Accordion = ({ obj, checkChild }) => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState(obj);
  const [isCheck, setIsCheck] = useState(data.isChecked);

  return (
    <div>
      <span>
        <span onClick={() => setIsActive(!isActive)}>
          {isActive ? folderOpen : data.ic_sub_categories && folderClose}
        </span>
        <input
          type={"checkbox"}
          checked={isCheck}
          onChange={() => checkChild(data, isCheck)}
        />
        {data.ic_disp_val}
      </span>

      {isActive && (
        <div className="accordion-content">
          {data.ic_sub_categories && (
            <ShowList content={data.ic_sub_categories} />
          )}
        </div>
      )}
    </div>
  );
};

function ShowList({ content, fullList }) {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState(content);
  let checkChild = (data, isCheck) => {
    if (data) {
      let g = filter(data, isCheck);
      console.log("ggggg", g);
      let f =
        fullList &&
        fullList.map((item) => {
          if (item.ic_sub_categories) {
            if (item.ic_sub_categories[0].ic_id == g[0].ic_id) {
              return { ...item, ic_id: g[0] };
            }
          } else {
            return item;
          }
        });
      setData(f);
    }
  };
  console.log("data ;", data);
  return (
    <ul>
      {data &&
        data.map((obj) => {
          return (
            <li key={obj.ic_id}>
              <Accordion obj={obj} checkChild={checkChild} />
            </li>
          );
        })}
    </ul>
  );
}

function LIComponent(props) {
  const [item, setItem] = useState({...props.item,isChecked:props.parentCheck});
  let change = (value, parentCheck) => {
    if (item.isChecked && parentCheck) {
      let f = { ...item, isCheck: !item.isChecked };
      setItem(f);
      props.setParentCheck(false);
    } else {
      let f = { ...item, isCheck: !item.isChecked };
      setItem(f);
    }
  };
  return (
    <ul>
      <li key={props.item.id}>
        {props.item.name}
        <input
          type="checkbox"
          checked={item.isChecked || props.parentChecked}
          onChange={(event) => {
            // change(item, props.parentCheck);
            setItem({ ...item, isChecked: !item.isChecked });
          }}
        />
      </li>
      {item.children &&
        item.children.map((el) => (
          <LIComponent item={el} parentChecked={item.isChecked} />
        ))}
    </ul>
  );
}

const CheckboxTree = (props) => {
  const [data, setData] = useState(items);
  const [parentCheck, setParentCheck] = useState(false);
  console.log("checbox tree rendred");
  return (
    <div>
      {items.map((item) => {
        return (
          <LIComponent
            item={item}
            parentChecked={item.isChecked}
            setParentCheck={setParentCheck}
          />
        );
      })}
      {/* <ShowList content={categories} fullList={categories} /> */}
    </div>
  );
};

export default CheckboxTree;
