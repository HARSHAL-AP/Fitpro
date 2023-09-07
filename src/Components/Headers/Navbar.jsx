import React from "react";
import Styles from "./Navbar.module.css";
import Searchbar from "./Searchbar";
import { FaUserCircle } from "react-icons/fa";
const Navbar = ({handelq}) => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.navbarcontent}>
        <div className={Styles.logo}>
          FitPro
        </div>
        <div className={Styles.searchbar}>
          <Searchbar queryhandler={handelq}/>
        </div>
        <div>
          <div className={Styles.usericon}>
            <FaUserCircle className={Styles.usericonic}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
