import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";

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
      <p>Balance ${tt.total}</p>
      <div>
        <div>
          <p>Income</p>
          <p>${income}</p>
        </div>
        <div>
          <p>Expense</p>
          <p>-${expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
