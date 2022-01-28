import "./App.css";
import React, { useState, Component, useEffect } from "react";
import TodosTab from "./components/tabs/TodosTab";
import LoginTab from "./components/tabs/LoginTab";
import HomeWorkTab from "./components/tabs/HomeWorkTab";
import DesignPractice from "./components/tabs/DesignPractice";
import InputSelect from "./components/tabs/inputSelect";
import RefPractice from "./components/tabs/refPractice";
import NestedList from "./components/tabs/NestedList";
import ClipPath from "./components/tabs/clipPath";
function App() {
  const [todos, setTodos] = useState([]);
  const [homeWork, setHomeWork] = useState([]);
  const [activeTab, handleTab] = useState(0);
  const [tabs, setTabs] = useState([
    {
      label: "Todos Tab",
      tabID: 0,
      content: <TodosTab todos={todos} setTodos={setTodos} />,
    },
    {
      label: "Home Tab",
      tabID: 1,
      content: <HomeWorkTab homeWork={homeWork} setHomeWork={setHomeWork} />,
    },

    { label: "Login Tab", tabID: 2, content: <LoginTab /> },
    {
      label: "Design practice",
      tabID: 3,
      content: <DesignPractice />,
    },
    {
      label: "Input with select combine",
      tabID: 4,
      content: <InputSelect />,
    },
    {
      label: "ref Practice",
      tabID: 5,
      content: <RefPractice />,
    },
    {
      label: "Nested List",
      tabID: 6,
      content: <NestedList />,
    },
    {
      label: "Clip Path",
      tabID: 7,
      content: <ClipPath />,
    },
  ]);

  return (
    <div>
      <TabsHeader tabs={tabs} activeTab={activeTab} handleTab={handleTab} />
      <br />

      <div className="d-flex justify-content-between">
        {tabs.length !== 0 &&
          tabs.map((item, index) => {
            if (activeTab == item.tabID) {
              return (
                <div key={index} style={{ width: "100%" }}>
                  {item.content}
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export class TabsHeader extends Component {
  render() {
    const { activeTab, handleTab, tabs } = this.props;
    return (
      <div className="tab-manager">
        {tabs.length !== 0 &&
          tabs.map(({ label, tabID }) => (
            <div
              key={tabID}
              className={`tab ${tabID === activeTab ? "selected-tab" : ""}`}
              onClick={() => {
                handleTab(tabID);
              }}
            >
              {label}
            </div>
          ))}
      </div>
    );
  }
}

export default App;
