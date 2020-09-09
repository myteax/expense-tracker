import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";

import "./InputSection.css";

const InputSection = () => {
  const tt = useContext(GlobalContext);
  const [description, setDescription] = useState("");
  const [amounts, setAmount] = useState("");

  const onsub = (e) => {
    e.preventDefault();
    let yy = {
      id: Math.random() * 10,
      text: description,
      amount: isNaN(amounts) ? 0 : amounts,
    };
    if (isNaN(amounts)) {
      document.getElementById("spanny").style.visibility = "visible";
      document.getElementById("ttf2").focus();
    } else {
      document.getElementById("spanny").style.visibility = "hidden";
      tt.additem(yy);
      setDescription("");
      setAmount("");
      document.getElementById("ttf").focus();
    }
  };

  return (
    <div className="row">
      <div className="col">
        <form onSubmit={onsub} className="" noValidate autoComplete="off">
          <span id="spanny" style={{ visibility: "hidden", color: "#F24130" }}>
            {" "}
            Error!
          </span>
          <div className="form-group">
            <div className="form-row">
              <div className="col-8">
                <label className="texty">Description:&nbsp;</label>
                <input
                  id="ttf"
                  className="form-control inputy"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label className="texty">
                  {isNaN(amounts) ? (
                    <span style={{ color: "red" }}>
                      Amount should be a number{" "}
                    </span>
                  ) : (
                    "Amount:"
                  )}
                  &nbsp;
                </label>
                <input
                  id="ttf2"
                  className="form-control inputy"
                  type="text"
                  value={amounts}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="col">
                <button className="btn btn-primary" id="buttono" type="submit">
                  Submit&nbsp;<i className="fa fa-star"></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputSection;
