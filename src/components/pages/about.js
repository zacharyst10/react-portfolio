import React from "react";
import profilePicture from "../../../static/assets/images/auth/bio/headshot.png"


export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
      className="left-column" 
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod excepturi architecto minima exercitationem fuga explicabo ducimus itaque consectetur est qui, aperiam ut quas ipsa sit nihil. Animi fuga possimus officiis!
      </div>
    </div>

  );
}