import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";

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
  };

  return (
    <div>
      <form onSubmit={onsub}>
        <div>
          <label> Input Description</label>
          <br />
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label> Input Amount</label>
          <br />
          <input type="text" onChange={(e) => setAmount(e.target.value)} />
        </div>

        <button> Submit Data </button>
      </form>
    </div>
  );
};

export default InputSection;
