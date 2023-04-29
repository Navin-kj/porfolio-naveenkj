import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { Container } from "./styled.component";

const ExpenseCard = ({ transaction }) => {
  const amount = transaction.map((transactions) => transactions.amount);

  const income = amount
    .filter((item) => item > 0)
    .reduce((amount, item) => (amount += item), 0)
    .toFixed(2);
  const expense = amount
    .filter((item) => item < 0)
    .reduce((amount, item) => (amount += item), 0)
    .toFixed(2);
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: "green" }}>₹ {income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: "red" }}>₹ {expense}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ExpenseCard;
