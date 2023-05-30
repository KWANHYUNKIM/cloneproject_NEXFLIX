import React from "react";
import { ClipLoader } from "react-spinners";
import './Loading.css';
const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#E50915",
  textAlign: "center",
};

const Loading = ({ loading }) => {
  return (
    <div className = "loadingScreen">
      <ClipLoader
        color="#E50915"
        loading={loading}
        cssOverride={override}
        size={400}
        
      />
    </div>
  );
};

export default Loading;