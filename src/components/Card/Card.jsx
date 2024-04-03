import React, { useContext } from "react";
import { themeContext } from "../../Context";

import "./Card.css";

const Card = ({ emoji, heading, detail, color }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="card"
      style={{
        borderColor: { color },
        backgroundColor: darkMode ? "rgba(117, 79, 132, 0.5)" : "",
      }}>
      <img src={emoji} className="emojiimg" alt="" />
      <span style={{ color: darkMode ? 'var(--purple)' : "", }}>{heading}</span>
      <span style={{ color: darkMode ? 'white' : "", }}>{detail}</span>
    </div>
  );
};

export default Card;
