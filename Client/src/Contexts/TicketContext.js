import { createContext , useState , useContext } from 'react'

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketList, setticketList] = useState([]) 

  const values = {
     ticketList,
     setticketList
   }

  return <TicketContext.Provider value = {values}>{children}</TicketContext.Provider>
}

export const useTicket = () => useContext(TicketContext);