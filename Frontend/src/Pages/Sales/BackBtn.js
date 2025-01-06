import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigates to the previous page in history
  };

  return (
    <button
      onClick={handleBack}
      style={{
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Back
    </button>
  );
};

export default BackButton;
