import React from "react";
import "./profile.css";

function Profile(props) {
  return (
    <div className="parent">
      <h2>Profile Page</h2>
      <h3>Name:{props.name}</h3>
      <h3>branch:{props.branch}</h3>
      <h3>section:{props.section}</h3>
      <h3>college:{props.college}</h3>
    </div>
  );
}

export default Profile;
