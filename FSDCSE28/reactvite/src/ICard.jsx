import React from "react";
function ICard() {
  return (
    <div
      style={{
        width: "90%",
        padding: "20px",
        margin: "20px",
        border: "2px solid #333",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        backgroundColor: "white",
      }}
    >
      {" "}
      <h2>ABES Engineering College</h2>{" "}
      <p>
        <b>Location:</b> Ghaziabad, Uttar Pradesh
      </p>{" "}
      <p>
        <b>Course:</b> B.Tech
      </p>{" "}
      <p>
        <b>Branch:</b> Computer Science & Engineering
      </p>{" "}
      <button
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        {" "}
        View College{" "}
      </button>{" "}
    </div>
  );
}
export default ICard;
