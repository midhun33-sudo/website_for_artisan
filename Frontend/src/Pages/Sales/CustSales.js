import React from "react";
//import NavBar from "../components/Navbar";
//import SectionBar from "../../components/SalesBoard/SectionBar/SectionBar";
import SalesBoard from "../../components/SalesBoard/SalesBoard";
import CustomerNavbar from "../../components/NavBar/CustomerNavbar";


const CustSales = () => {
  return (
    <pagelayout>
      <CustomerNavbar /> 
      
      <div style={{ marginLeft: "100px", padding: "35px" }}>
        <h1>Sales Board</h1>
        <SalesBoard />
      </div>
    </pagelayout>
  );
};



export default CustSales;
