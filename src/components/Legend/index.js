import React from "react";
import "./style.css";
export default function Legend({ text, classes }) {
  return (
      <div className={classes}>
      <p>{text}</p>
      </div>
  )
}