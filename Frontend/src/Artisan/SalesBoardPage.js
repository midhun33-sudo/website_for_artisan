import React from "react";
//import NavBar from "../components/Navbar";
import SalesBoard from "../components/SalesBoard/SalesBoard";
import ArtisanNavbar from "../components/NavBar/ArtisanNavbar";

const SalesBoardPage = () => {
  return (
    <pagelayout>
      <ArtisanNavbar />
      
      <div style={{ marginLeft: "100px", padding: "35px" }}>
        <h1>Sales Board</h1>
        <SalesBoard />
      </div>
    </pagelayout>
  );
};



export default SalesBoardPage;
