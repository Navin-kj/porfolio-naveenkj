import { ListItemText } from "@mui/material";
import React from "react";
import { Detail } from "./styled.component";
import DeleteIcon from "@mui/icons-material/Delete";

const ListItems = ({ transaction, setTransactions, transactions }) => {
  const color = transaction.amount > 0 ? "Green" : "Red";

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };
  return (
    <Detail style={{ background: `${color}` }}>
      <ListItemText>
        <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
      </ListItemText>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>₹ {transaction.amount}</ListItemText>
    </Detail>
  );
};

export default ListItems;
