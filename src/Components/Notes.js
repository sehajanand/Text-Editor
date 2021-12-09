import React from "react";
// import { noteArr } from './Textarea.js';
import "./Notes.css";

export default function Notes() {
  let noteArr2 = JSON.parse(localStorage.getItem(`note`));

  return (
    <>
      <div className="container ">
        <div className="row">
          {noteArr2 == null ? (
            <div style={{ color: `black` }}>
              <h1>No Note Taken!!</h1>
            </div>
          ) : (
            noteArr2.map((el, ind) => {
              return (
                <div className="col mx-2 my-2" key={ind}>
                  <div className="card" style={{ width: `18rem` }}>
                    <div className="card-body">
                      <h5 className="card-title">Note {ind + 1}</h5>
                      <p>
                        {el.length >= 162
                          ? `Bruh this 'Note' is too long! What you tried to save was a paragraph not a note:)`
                          : el}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
