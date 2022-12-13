import React from 'react';
import { AddTransaction } from './components/addTransaction';
import { Balance } from './components/balance';
import { Header } from './components/header';
import { IncomeExpenses } from './components/incomeexpenses';
import { TransactionList } from './components/transactionList';

function App() {
  return (
    <div >
      <Header />
      <div className='container'>
        < Balance />
        < IncomeExpenses />
        < TransactionList />
        < AddTransaction />
      </div>
    </div>
  );
}

export default App;
