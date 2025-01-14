import React from "react";
import HistorySidebar from "./HistorySidebar";
import HistoryContent from "./HistoryContent";
import Navbar from "../Navbar";
//import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="container-fluid overflow-none" style={{ height: "600px", overflow: "none"}}>
      <Navbar/>
      <div className="row">
        {/* Commande List Component */}
        <div className="col-md-4 bg-light overflow-y-auto"
      style={{
        height: "calc(100vh - 20px)",
        position: "sticky",
        top: 0,
        padding: "15px",
        marginBottom : "10px",
      }}>
          <HistorySidebar />
          
        </div>

        {/* Commande Details Component */}
        <div className="col-md-8 overflow-y-auto"
      style={{
        height: "calc(100vh - 20px)",
        paddingBottom: "10px",
        marginBottom : "10px",
      }}>
          <HistoryContent />
        </div>
      </div>
    </div>
  );
}

export default App;
