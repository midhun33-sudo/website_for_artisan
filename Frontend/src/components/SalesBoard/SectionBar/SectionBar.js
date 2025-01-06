import React from "react";
import "./SectionBar.css";

const SectionBar = () => {
  const headings = ["Top Selling Products", "Recently Sold", "Pending Deliveries"];

  return (
    <div className="section-bar">
      {headings.map((heading, index) => (
        <div key={index} className="section-item">
          {heading}
        </div>
      ))}
    </div>
  );
};

export default SectionBar;
