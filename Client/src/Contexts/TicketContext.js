import { createContext , useState , useContext } from 'react'

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketList, setTicketList] = useState([]) 
  const seatList = []
  for (let index = 0; index < 10; index++) {
       seatList.push(index)    
  }
  const values = {
     ticketList,
     setTicketList,
     seatList
   }

  return <TicketContext.Provider value = {values}>{children}</TicketContext.Provider>
}

export const useTicket = () => useContext(TicketContext);