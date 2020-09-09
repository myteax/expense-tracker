import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../App";

//////////////////////////
import "./TransactionList.css";

const TransactionList = () => {
  const tt = useContext(GlobalContext);
  const [show, setShow] = useState(false);
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

  const mouseo = (x) => {
    document.getElementById(x).style.visibility = "visible";
  };
  const mouseou = (x) => {
    document.getElementById(x).style.visibility = "hidden";
  };

  return (
    <div className="row" id="roow">
      <div className="col-8" id="tables">
        <div className="datagrid ">
          <table className="table " id="tabb" scrollbars="yes" height="100">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody id="yomi">
              {tt.transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  onMouseOver={() => mouseo(transaction.id)}
                  onMouseOut={() => mouseou(transaction.id)}
                >
                  <td>
                    {transaction.text}{" "}
                    <span
                      className="sid"
                      style={{ visibility: "hidden" }}
                      id={transaction.id}
                      onClick={() => tt.del(transaction.id)}
                    >
                      {" "}
                      Delete{" "}
                    </span>{" "}
                  </td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col">
            <div className="datagrid">
              <table className="table">
                <thead>
                  <tr>
                    <th className="center-expense">Income:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="center-expense">${income}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="datagrid">
              <table className="table">
                <thead>
                  <tr>
                    <th className="center-expense">Expenses:</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="center-expense">${expense}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
