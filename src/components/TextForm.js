import React, { useState } from "react";
import './../App.css';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text.length > 0) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text Converted to Uppercase Successfully.", "success");
    }
    else {
      props.showAlert("Error! Please Enter Text First, to Convert Uppercase", "danger");
    }
  };

  const handleDownClick = () => {
    if (text.length > 0) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text Converted to Lowercase Successfully.", "success");
    }
    else {
      props.showAlert("Error! Please Enter Text First, to Convert Lowercase", "danger");
    }
  };

  const handelClearText = () => {
    if (text.length > 0) {
      setText("");
      props.showAlert("Text Cleard Successfully.", "success");
    }
    else {
      props.showAlert("Error! Please Enter Text First, to clear Textbox", "danger");
    }
  }

  const handleBold = () => {
    let boldText = text.bold();
    if (text === '' || text == null) {
      setText("");
    }
    else {
      setText(boldText);
    }
  }

  const handleOnChage = (event) => {

    setText(event.target.value);

  };

  const handelCopyText = () => {
    let copyText = document.getElementById('my-box');
    // let alertTag = document.getElementById('alert-Tag');

    if (copyText.value.length !== 0) {
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.showAlert("Text Coppied Successfylly ", "success")
      // setAlertText("Text Coppied Successfylly");
      // alertTag.classList.remove("d-none");
      // alertTag.classList.add("d-block", "alert-success");
      // setTimeout(function () {
      //   alertTag.classList.remove("d-block", "alert-success");
      //   alertTag.classList.add("d-none");
      // }, 5000)

    }
    else {
      // setAlertText("Please Enter Text In Text Field To Copy Text");
      props.showAlert("Please Enter Text In Text Field To Copy Text", "danger")
      // alertTag.classList.remove("d-none");
      // alertTag.classList.add("d-block", "alert-danger");
      // setTimeout(function () {
      //   alertTag.classList.remove("d-block", "alert-danger");
      //   alertTag.classList.add("d-none");
      // }, 5000)

    }

  }

  // const [alertText, setAlertText] = useState("");



  return (
    <>
      <div className="container mt-3" >
        <h2>{props.title}</h2>
        {/* Start Alert Section */}
        {/* <div class="alert z-1 d-none position-fixed top-0 end-0 mx-3 my-5 p-3" role="alert" id="alert-Tag">
          {alertText}
        </div> */}
        {/* End Alert Section */}
        <div className="card text-start" data-bs-theme={`${props.mode === 'light' ? 'light' : 'dark'}`}>
          <div className="card-header d-flex flex-wrap gap-2">
            {/* buttons for text editor */}

            {/* delete button */}
            <button id="clear" className="btn btn-sm btn-outline-danger" title="Delete Text" onClick={handelClearText} >
              <span className="material-symbols-outlined">delete </span>
            </button>

            {/* copy to clipboard */}
            <button id="clear" className="btn btn-sm btn-outline-primary" title="Copy Text" onClick={handelCopyText}>
              <span className="material-symbols-outlined">content_copy </span>
            </button>

            {/* button group */}
            <div className="btn-group" role="group">
              {/* undo button */}
              <button id="undo" className="btn btn-sm btn-outline-secondary" title="Undo">
                <span className="material-symbols-outlined">undo </span>
              </button>
              {/* redo button */}
              <button id="redo" className="btn btn-sm btn-outline-secondary" title="Redo">
                <span className="material-symbols-outlined">redo </span>
              </button>
            </div>

            <div className="btn-group" role="group">
              {/* Uppercase */}
              <button id="Uppercase" className="btn btn-sm btn-outline-secondary" title="Uppercase" onClick={handleUpClick}>
                <span className="material-symbols-outlined" >Uppercase </span>
              </button>
              {/* Lowercase */}
              <button id="Lowercase" className="btn btn-sm btn-outline-secondary" title="Lowercase" onClick={handleDownClick}>
                <span className="material-symbols-outlined">lowercase </span>
              </button>
              {/* MAtch case */}
              <button id="Lowercase" className="btn btn-sm btn-outline-secondary" title="Match Case" >
                <span className="material-symbols-outlined">match_case </span>
              </button>
            </div>

            <button id="Lowercase" className="btn btn-sm btn-outline-secondary" title="Bold" onClick={handleBold}>
              <span className="material-symbols-outlined">format_bold </span>
            </button>

            <div className="btn-group" role="group">
              <button id="Lowercase" className="btn btn-sm btn-outline-secondary" title="Text Decrease" >
                <span className="material-symbols-outlined">text_decrease </span>
              </button>
              <button id="Lowercase" className="btn btn-sm btn-outline-secondary" title="Text Increase" >
                <span className="material-symbols-outlined">text_increase </span>
              </button>
            </div>

          </div>
          <div className="card-body">
            <div className="mb-3">
              <textarea
                className="form-control"
                value={text}
                onChange={handleOnChage}
                id="my-box"
                rows="10"
                placeholder="Enter Text Here"
              ></textarea>
            </div>
            {/* <div className="card-body" contentEditable="true">Its card Body</div> */}
          </div>
        </div>

      </div>

      <div className="container">
        <h3>Your Text Summary</h3>
        <h6>
          {text.split(" ").filter((e) => { return e.length !== 0 }).length} Words and {text.length} Characters
        </h6>
        <p>{0.008 * text.split(" ").length} Minutes Read time</p>

        <h3>Preview</h3>
        <hr />
        <p>{text}</p>
      </div>
    </>
  );
}
