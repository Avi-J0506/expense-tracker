import './App.css';
import { Header } from './Components/header';
import { Balance } from './Components/balance';
import { IncomeExpenses } from './Components/incomeexpenses';
import { AddTransaction } from './Components/AddTransaction';
import { Transactionlist } from './Components/transactionlist';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <Transactionlist />
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
