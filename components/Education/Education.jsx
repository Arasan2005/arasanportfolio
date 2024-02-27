import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Education.css";
const Education = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="awesome">
      <span style={{ color: darkMode ? "white" : "" }}>My Educational </span>
      <span>Details</span> </div>
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          74%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>BE-ECE</span>
        <span>SRM Valliammai Engineering College</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          86%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>HSC</span>
        <span>Laurel Higher Secondary School</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          89%
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>SSLC</span>
        <span>St.Antony's Higher Secondary School </span>
      </div>
    </div>
  );
};

export default Education;
