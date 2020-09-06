import React, { useContext, useState } from "react";
import { GlobalContext } from "../App";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./TransactionList.css";

const TransactionList = () => {
  const tt = useContext(GlobalContext);
  const [show, setShow] = useState(false);

  const mouseo = (x) => {
    document.getElementById(x).style.visibility = "visible";
  };
  const mouseou = (x) => {
    document.getElementById(x).style.visibility = "hidden";
  };

  const useStyles = makeStyles({
    table: {
      minWidth: 100,
      maxWidth: 350,
    },
    text: {
      fontWeight: 800,
    },
  });
  const classes = useStyles();
  return (
    <div className="tyy">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.text}> Description </TableCell>
              <TableCell align="right" className={classes.text}>
                Amount{" "}
              </TableCell>
            </TableRow>
          </TableHead>

          {tt.transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              onMouseOver={() => mouseo(transaction.id)}
              onMouseOut={() => mouseou(transaction.id)}
            >
              <TableCell component="th" scope="row">
                {transaction.text}{" "}
                <span
                  className="sid"
                  style={{ visibility: "hidden" }}
                  id={transaction.id}
                  onClick={() => tt.del(transaction.id)}
                >
                  {" "}
                  Delete{" "}
                </span>
              </TableCell>
              <TableCell align="right">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionList;
