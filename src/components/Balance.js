import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";
import Grid from "@material-ui/core/Grid";
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
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className="balance bodi">
            <h3 className={tt.total < 0 ? "ch2" : "ch3"}>
              Balance ${tt.total}
            </h3>
          </div>
        </Grid>
      </Grid>
      <div className="fit">
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs>
            <p className="jdj">Income: ${income}</p>
          </Grid>

          <Grid item xs>
            <p className="jdj">Expense: -${expense} </p>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Balance;
