import React, { useState } from "react";
import "../App.css";
import IconRecentsTab from "./IconRecentsTab"
import IconCustomize from "./IconCustomize";
import IconSavedTab from "./IconSavedTab";
import IconTraveled from "./IconTraveled";

const Tabs = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ul
      className="list-group mg"
      style={{ width: "200px", border: "none", borderRadius: "0%" }}
    >
      <li
        className={`list-group-item ${
          activeTab === "Recent" ? "current-tab" : ""
        } custom-list-group`}
        aria-current={activeTab === "Recent"}
        onClick={() => handleTabClick("Recent")}
      >
        <IconRecentsTab/>&nbsp;&nbsp;&nbsp;Recent
      </li>
      <li
        className={`list-group-item ${
          activeTab === "Marked" ? "current-tab" : ""
        } custom-list-group`}
        onClick={() => handleTabClick("Marked")}
      >
        <IconSavedTab/>&nbsp;&nbsp;&nbsp;Marked
      </li>
      <li
        className={`list-group-item ${
          activeTab === "Traveled" ? "current-tab" : ""
        } custom-list-group`}
        onClick={() => handleTabClick("Traveled")}
      >
        <IconTraveled/>&nbsp;&nbsp;&nbsp;Traveled
      </li>
      <li
        className={`list-group-item ${
          activeTab === "Customize" ? "current-tab" : ""
        } custom-list-group`}
        onClick={() => handleTabClick("Customize")}
      >
        <IconCustomize/>&nbsp;&nbsp;&nbsp;Customize
      </li>
    </ul>
  );
};

export default Tabs;
