import { Box } from "@mui/material";
import React from "react";
import { BalanceText } from "./styled.component";

const Balance = ({ transaction }) => {
  const amount = transaction.map((transactions) => transactions.amount);

  const total = amount
    .reduce((amount, items) => (amount += items), 0)
    .toFixed(2);

  return (
    <Box>
      <BalanceText>Balance : ₹ {total}</BalanceText>
    </Box>
  );
};

export default Balance;
