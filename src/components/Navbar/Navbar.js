import React, { useState } from "react";
import ReactDOM from "react-dom";
// import { useRef } from "react";
import classes from "./Navbar.module.css";
const Navbar = () => {
  /*Handle togle */
  const [isToggled, setToggled] = useState(false);
  const [isDisplayed, setDisplayed] = useState("none");
  //   const inputRef = React.useRef();
  //   console.log(inputRef);

  const toggleSwitch = (e) => {
    e.preventDefault();
    setToggled(!isToggled);
    if (isToggled === true) {
      let NavSmall = document.getElementById("NavSmall");
      ReactDOM.findDOMNode(NavSmall).style.display = "block";
    } else {
      let NavSmall = document.getElementById("NavSmall");
      ReactDOM.findDOMNode(NavSmall).style.display = "none";
    }
  };

  return (
    <>
      <div className={classes.Navbar}>
        <div className={classes.NavbarInside}>
          {/* Left part of the Nav */}
          <div className={classes.NavbarLeft}>
            {/* logo part of the Nav */}
            <div className={classes.NavbarLogo}>
              <div>
                <small className={classes.H}>H</small>
                <small className={classes.Acker}>acker news</small>
              </div>
            </div>
            {/* Left Syntax part of the Nav */}
            <div className={classes.NavbarLeftSyntax}>
              <ul>
                <li>new</li>
                <li>past</li>
                <li>comment</li>
                <li>ask</li>
                <li>show</li>
                <li>jobs</li>
                <li>submit</li>
              </ul>
            </div>
          </div>
          {/* Right part of the Nav */}
          <div className={classes.NavbarRight}>
            <div>
              <a className={classes.login}>Login</a>
              <a className={classes.register}>Register</a>
              <a onClick={toggleSwitch} className={classes.Bars}>
                <i className="fas fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="NavSmall" className={classes.NavSmall}>
        <ul>
          <li>news</li>
          <li>past</li>
          <li>comment</li>
          <li>ask</li>
          <li>show</li>
          <li>jobs</li>
          <li>submit</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
