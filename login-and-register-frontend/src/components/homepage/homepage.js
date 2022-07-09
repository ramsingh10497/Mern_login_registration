import React from "react";
import "./homepage.css";

const Homepage = ({ setLoginUser }) => {
  const onLogOut = () => {
    sessionStorage.removeItem("user");
    setLoginUser({});
  };
  return (
    <div className="homepage">
      <h1>Hello Homepage</h1>
      <div className="button" onClick={onLogOut}>
        Logout
      </div>
    </div>
  );
};

export default Homepage;
