import React from 'react';
import { Balance } from './components/balance';
import { Header } from './components/header';

function App() {
  return (
    <div >
      <Header />
      <div className='container'>
        < Balance />
      </div>
    </div>
  );
}

export default App;
