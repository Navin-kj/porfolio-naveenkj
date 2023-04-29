import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { TranContainer } from "./styled.component";

const NewTransaction = ({ setTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const addTransaction = () => {
    const transactions = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      amount: +amount,
    };
    setTransactions((prevState) => [transactions, ...prevState]);
  };
  return (
    <TranContainer>
      <Typography variant="h5">New Transaction</Typography>
      <TextField
        label="Enter Expense"
        onChange={(e) => setText(e.target.value)}
      />
      <TextField
        label="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={() => addTransaction()}>
        Add Transaction
      </Button>
    </TranContainer>
  );
};

export default NewTransaction;
