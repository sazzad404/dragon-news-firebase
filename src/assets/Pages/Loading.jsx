import React from "react";
import "./loading.css"

const Loading = () => {
  return (
     <div className="news-loader">
      <div className="pulse-bar"></div>
      <p className="loading-text">Fetching latest headlines...</p>
    </div>
  );
};

export default Loading;
