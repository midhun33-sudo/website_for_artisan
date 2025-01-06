import React from "react";
import Card from "./Card";
import "./SalesRow.css";

const SalesRow = ({ title, data }) => {
  return (
    <div className="sales-row">
      <h3>{title}</h3>
      <div className="card-container">
        {data.map((item, index) => (
          <Card key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

export default SalesRow;
