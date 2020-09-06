import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./InputSection.css";
import { red } from "@material-ui/core/colors";

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

  const useStyles = makeStyles({
    texf: {
      // height: 50,
      // psotion: "relative",
      left: "auto",
      padding: 5,
      color: "red !important",
    },
    bbn: {
      left: "auto",
      margin: 5,
    },
    // floatingLabelFocusStyle: {
    //   color: "red",
    // },
  });
  const classes = useStyles();

  return (
    <div>
      <form onSubmit={onsub} className="tpo" noValidate autoComplete="off">
        <span id="spanny" style={{ visibility: "hidden", color: "#F24130" }}>
          {" "}
          Error!
        </span>
        <div>
          {/* <label> Input Description</label>
          <br /> */}
          <TextField
            id="ttf"
            className={classes.texf}
            InputLabelProps={{
              style: { color: "#EFC9A5" },
            }}
            // InputLabelProps={{
            //   className: classes.floatingLabelFocusStyle,
            // }}
            value={description}
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            label="Description"
            variant="filled"
          />
        </div>

        <div>
          {/* <label> Input Amount</label>
          <br /> */}
          <TextField
            id="ttf2"
            className={classes.texf}
            InputLabelProps={{
              style: { color: "#EFC9A5" },
              yy,
            }}
            type="text"
            value={amounts}
            onChange={(e) => setAmount(e.target.value)}
            label={isNaN(amounts) ? "Amount should be a number" : "Anount"}
            variant="filled"
          />
        </div>

        <Button
          className={classes.bbn}
          variant="contained"
          color="secondary"
          type="submit"
        >
          {" "}
          Submit Data{" "}
        </Button>
      </form>
    </div>
  );
};

export default InputSection;
