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
  const [amount, setAmount] = useState("");

  const onsub = (e) => {
    e.preventDefault();
    let yy = {
      id: Math.random() * 10,
      text: description,
      amount: amount,
    };
    tt.additem(yy);
    setDescription("");
    setAmount("");
    document.getElementById("ttf").focus();
  };

  const useStyles = makeStyles({
    texf: {
      // height: 50,
      // psotion: "relative",
      left: "auto",
      padding: 5,
    },
    bbn: {
      left: "auto",
      margin: 5,
    },
  });
  const classes = useStyles();

  return (
    <div>
      <form onSubmit={onsub} className="tpo" noValidate autoComplete="off">
        <div>
          {/* <label> Input Description</label>
          <br /> */}
          <TextField
            id="ttf"
            className={classes.texf}
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
            className={classes.texf}
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            label="Amount"
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
