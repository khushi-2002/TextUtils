import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const onHandleUpperCase = () => {
    // console.log("Upper Case clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const onHandleClear = () => {
    // console.log("Upper Case clicked " + text);
    let newText = "";
    setText(newText);
    props.showAlert("Successfuly cleared the text", "success");
  };
  const onHandleLowerCase = () => {
    // console.log("Upper Case clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const onHandleGoodWriting = () => {
    let newText = text.trim();
    newText = newText.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Converted your text to beautiful text", "success");
  };

  const onHandleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Succesfully copied the text", "success");
  };

  const onHandleChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={onHandleChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#042743",
              color: props.mode === "light" ? "#042743" : "white",
            }}
          ></textarea>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={onHandleUpperCase}
            disabled={text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={onHandleLowerCase}
            disabled={text.length === 0}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={onHandleClear}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={onHandleGoodWriting}
            disabled={text.length === 0}
          >
            Click for good writing
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={onHandleCopyText}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h2>Your Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          MInutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
