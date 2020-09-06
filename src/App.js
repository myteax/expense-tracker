import React, { useReducer, useState, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import InputSection from "./components/InputSection";
import Container from "@material-ui/core/Container";

const transactions = [];
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case "ADDITEM":
      console.log(action.payload);
      return [action.payload, ...state];
    // return state.push(action.payload);
    case "DELITEM":
      return action.payload;
  }
};

export const GlobalContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, transactions);

  const [total, setTotal] = useState(0);

  const additem = (y) => {
    const tran = {
      id: y.id,
      text: y.text,
      amount: parseInt(y.amount),
    };
    dispatch({ type: "ADDITEM", payload: tran });
  };

  const del = (y) => {
    const tranw = state.filter((tt) => tt.id !== y);
    console.log(tranw);
    dispatch({ type: "DELITEM", payload: tranw });
  };

  useEffect(() => {
    let gy = 0;
    state.map((transaction) => {
      gy = gy + transaction.amount;
    });
    setTotal(gy);
  }, [state]);

  return (
    <Container>
      <div className="container">
        <GlobalContext.Provider
          value={{
            transactions: state,
            total: total,
            additem,
            del,
          }}
        >
          <Header />
          <Balance />
          <TransactionList />
          <InputSection />
        </GlobalContext.Provider>
      </div>
    </Container>
  );
}

export default App;
