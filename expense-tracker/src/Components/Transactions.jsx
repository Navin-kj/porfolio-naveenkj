import { Box, Divider, List, ListItemText, Typography } from "@mui/material";
import React from "react";
import ListItems from "./ListItems";
import { Detail } from "./styled.component";

const Transactions = ({ transactions, setTransactions }) => {
  return (
    <Box>
      <Typography variant="h5">Transaction History</Typography>
      <Divider />
      <Detail>
        <ListItemText>Detail</ListItemText>
        <ListItemText>Amount</ListItemText>
      </Detail>
      <List>
        {transactions.map((transaction) => (
          <ListItems
            transaction={transaction}
            setTransactions={setTransactions}
            transactions={transactions}
          />
        ))}
      </List>
    </Box>
  );
};

export default Transactions;
