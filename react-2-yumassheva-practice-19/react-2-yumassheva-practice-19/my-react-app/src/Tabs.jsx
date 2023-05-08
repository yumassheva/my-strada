import React from "react";
import NowTab from "./NowTab.jsx";
import DetailsTab from "./DetailsTab.jsx";
const Tabs = ({addCity}) => {
  const [activeTab, setActiveTab] = React.useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  return (
    <div className="Tabs">
      <div className="nav">
        <button
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}>
                    Now
        </button>
        <button
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}>
                    Details
        </button>
      </div>
      <div className="outlet">
        {activeTab === "tab1" ? <NowTab addCity={addCity} /> : <DetailsTab/>}
      </div>
    </div>
  );
};
export default Tabs;