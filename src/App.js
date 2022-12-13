import React from 'react';
import { AddTransaction } from './components/addTransaction';
import { Balance } from './components/balance';
import { Header } from './components/header';
import { IncomeExpenses } from './components/incomeexpenses';
import { TransactionList } from './components/transactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider >
      <Header />
      <div className='container'>
        < Balance />
        < IncomeExpenses />
        < TransactionList />
        < AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
