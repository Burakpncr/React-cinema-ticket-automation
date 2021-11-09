import './App.css';
import Header from './Components/Header/Header'
import TicketList from './Components/TicketList/TicketList';
import TicketSales from './Components/TicketSales/TicketSales'
import { TicketProvider } from './Contexts/TicketContext'

function App() {
 
  return (
    <div className="App">
      <TicketProvider>
     <Header />
     <TicketSales />
     <TicketList />
     </TicketProvider>
      </div>
  );
}

export default App;
