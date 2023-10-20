import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper case !" ,"success")
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked");

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lower case !" ,"success")
  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked");

    setText("");
    props.showAlert("Text was cleared !" ,"success")
  };
  const handleCopy = () => {
    // console.log("Uppercase was clicked");
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text was copied !" ,"success")
  };
  const handleSpaces = () => {
    // console.log("Uppercase was clicked");
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text was copied !" ,"success")
  };

  const handleUpChange = (e) => {
    // console.log("Uppercase was clicked");
    setText(e.target.value);
  };

 
  return (
    <div className="mb-3">
      <div>
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h1>

        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#383838" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          value={text}
          onChange={handleUpChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-dark btn-sm mx-1 my-1" onClick={handleUpClick} >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-dark btn-sm mx-1 my-1"
        onClick={handleLowClick}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn btn-dark btn-sm mx-1 my-1"
        onClick={handleClearClick}
      >
        Clear Text
      </button>
      <button className="btn btn-dark btn-sm mx-1 my-1 " onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-dark btn-sm mx-1 my-1 " onClick={handleSpaces}>
        Remove Extra Spaces
      </button>
      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your Text Summary </h1>
        <p>
          {" "}
          {text.split(" ").filter((e)=> {return e.length!= 0}).length} words and {text.length} characters
        </p>

        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview
        </h2>
        <p>{text.length >0 ? text : "Enter some text to preview it"}</p>
      </div>
    </div>
  );
}
