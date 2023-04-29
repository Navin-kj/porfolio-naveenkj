import { Box } from "@mui/material";
import { useState } from "react";
import "./App.css";
import Balance from "./Components/Balance";
import ExpenseCard from "./Components/ExpenseCard";
import NewTransaction from "./Components/NewTransaction";
import { Component, Header } from "./Components/styled.component";
import Transactions from "./Components/Transactions";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Momos", amount: -50 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -300 },
    { id: 4, text: "Bonus", amount: 1220 },
  ]);
  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transaction={transactions} />
          <ExpenseCard transaction={transactions} />
          <NewTransaction setTransactions={setTransactions} />
        </Box>
        <Box>
          <Transactions
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
