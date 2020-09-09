import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import "./Balance.css";

const Balance = () => {
  const tt = useContext(GlobalContext);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    let val = 0;
    let val2 = 0;
    const aincome = tt.transactions.filter((i) => i.amount > 0);
    aincome.map((aa) => (val = val + aa.amount));

    const aincome2 = tt.transactions.filter((i) => i.amount < 0);
    aincome2.map((aa) => (val2 = val2 - aa.amount));
    setIncome(val);
    setExpense(val2);
  }, [tt]);

  return (
    <div className="row">
      <div className="col" style={{ marginTop: "9px" }}>
        <div className="d-flex float-right" id="balance">
          <h1 id="htbal" style={{ color: tt.total < 0 ? "red" : "white" }}>
            Balance: ${tt.total.toString().length > 9 ? "> Range" : tt.total}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Balance;
