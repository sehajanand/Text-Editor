import React, { useState } from "react";
import "./Textarea.css";

if (localStorage.getItem(`note`) === null) {
  var noteArr = [];
} else {
  var noteArr = JSON.parse(localStorage.getItem(`note`));
}
export default function Textarea() {
  let [text, setText] = useState("");
  let [copyTextValue, setValueCopy] = useState(false);
  let [upperCaseValue, setValueuppercase] = useState(false);
  let [lowerCaseValue, setValuelowercase] = useState(false);
  let [improveTextValue, setValueimprovetext] = useState(false);
  let [clearTextValue, setValuecleartext] = useState(false);
  let [noteValue, setValuenote] = useState(false);
  function handleChange(e) {
    setText(e.target.value);
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    setText("");

    setValueCopy(true);
  }
  function upperCase() {
    setText(text.toUpperCase());
    setValueuppercase(true);
  }
  function lowerCase() {
    setText(text.toLowerCase());
    setValuelowercase(true);
  }
  function clearText() {
    setText("");
    setValuecleartext(true);
  }
  function improveText() {
    let arr = text.split(/\s+/);
    let improvedTxt = arr.join(" ");
    setText(improvedTxt);
    setValueimprovetext(true);
  }
  function noteClick() {
    noteArr.push(text);
    setText("");
    localStorage.setItem(`note`, JSON.stringify(noteArr));
    setValuenote(true);
  }

  function copyLeave() {
    setInterval(() => {
      setValueCopy(false);
    }, 3000);
  }
  function upperLeave() {
    setInterval(() => {
      setValueuppercase(false);
    }, 3000);
  }
  function lowerLeave() {
    setInterval(() => {
      setValuelowercase(false);
    }, 3000);
  }
  function improveTextLeave() {
    setInterval(() => {
      setValueimprovetext(false);
    }, 3000);
  }
  function clearTextLeave() {
    setInterval(() => {
      setValuecleartext(false);
    }, 3000);
  }
  function noteLeave() {
    setInterval(() => {
      setValuenote(false);
    }, 3000);
  }
  return (
    <>
      <div className="alert-box">
        {copyTextValue && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Text Copied!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {upperCaseValue && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Changed to Uppercase!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {lowerCaseValue && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Changed to Lowercase!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {improveTextValue && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Text layout Improved!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {clearTextValue && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Text Cleared!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        {noteValue && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Note Taken bro easy!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
      <div className="mb-3 text-box">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter Text and alter it as you wish!!
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="button-Grp">
        <button
          type="button"
          className="btn btn-outline-primary my-2"
          onClick={copyText}
          onMouseLeave={copyLeave}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-outline-primary my-2"
          onClick={upperCase}
          onMouseLeave={upperLeave}
        >
          To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-outline-primary my-2"
          onClick={lowerCase}
          onMouseLeave={lowerLeave}
        >
          To LowerCase
        </button>
        <button
          type="button"
          className="btn btn-outline-primary my-2"
          onClick={improveText}
          onMouseLeave={improveTextLeave}
        >
          Improve Text
        </button>
        <button
          type="button"
          className="btn btn-outline-primary my-2"
          onClick={clearText}
          onMouseLeave={clearTextLeave}
        >
          Clear Text
        </button>
        <button
          type="button"
          onClick={noteClick}
          onMouseLeave={noteLeave}
          className="btn btn-outline-primary"
        >
          Take Note
        </button>
      </div>
      <h2>Preview</h2>
      <p>{text.length === 0 ? `Please Write something to preview` : text}</p>
      <h2> Words And Characters </h2>
      <p>
        There are {text.length} characters and{" "}
        {
          text.split(/\s+/).filter((el) => {
            return el.length !== 0;
          }).length
        }{" "}
        words. <br /> It will take about{" "}
        {text.split(/\s+/).filter((el) => {
          return el.length !== 0;
        }).length * 0.3333}{" "}
        seconds or{" "}
        {(text.split(/\s+/).filter((el) => {
          return el.length !== 0;
        }).length *
          0.3333) /
          60}{" "}
        minutes to read your text.
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,128L10.9,133.3C21.8,139,44,149,65,138.7C87.3,128,109,96,131,112C152.7,128,175,192,196,208C218.2,224,240,192,262,197.3C283.6,203,305,245,327,229.3C349.1,213,371,139,393,106.7C414.5,75,436,85,458,117.3C480,149,502,203,524,192C545.5,181,567,107,589,112C610.9,117,633,203,655,245.3C676.4,288,698,288,720,277.3C741.8,267,764,245,785,218.7C807.3,192,829,160,851,149.3C872.7,139,895,149,916,170.7C938.2,192,960,224,982,202.7C1003.6,181,1025,107,1047,90.7C1069.1,75,1091,117,1113,144C1134.5,171,1156,181,1178,192C1200,203,1222,213,1244,224C1265.5,235,1287,245,1309,256C1330.9,267,1353,277,1375,245.3C1396.4,213,1418,139,1429,101.3L1440,64L1440,320L1429.1,320C1418.2,320,1396,320,1375,320C1352.7,320,1331,320,1309,320C1287.3,320,1265,320,1244,320C1221.8,320,1200,320,1178,320C1156.4,320,1135,320,1113,320C1090.9,320,1069,320,1047,320C1025.5,320,1004,320,982,320C960,320,938,320,916,320C894.5,320,873,320,851,320C829.1,320,807,320,785,320C763.6,320,742,320,720,320C698.2,320,676,320,655,320C632.7,320,611,320,589,320C567.3,320,545,320,524,320C501.8,320,480,320,458,320C436.4,320,415,320,393,320C370.9,320,349,320,327,320C305.5,320,284,320,262,320C240,320,218,320,196,320C174.5,320,153,320,131,320C109.1,320,87,320,65,320C43.6,320,22,320,11,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
