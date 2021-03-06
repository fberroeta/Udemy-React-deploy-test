// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Comida',
    amount: 80000,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'Nueva TV',
    amount: 350000,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Seguro Auto',
    amount: 50000,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Cuenta Internet',
    amount: 40000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
