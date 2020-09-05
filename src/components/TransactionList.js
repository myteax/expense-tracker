import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";

const TransactionList = () => {
  const tt = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const mouseo = (x) => {
    document.getElementById(x).style.visibility = "visible";
  };
  const mouseou = (x) => {
    document.getElementById(x).style.visibility = "hidden";
  };
  return (
    <div>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount</th>
        </tr>
        {tt.transactions.map((transaction) => (
          <tr
            onMouseOver={() => mouseo(transaction.id)}
            onMouseOut={() => mouseou(transaction.id)}
          >
            <td>{transaction.text}</td>
            <td>
              {transaction.amount}{" "}
              <span
                style={{ visibility: "hidden" }}
                id={transaction.id}
                onClick={() => tt.del(transaction.id)}
              >
                {" "}
                x{" "}
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TransactionList;
