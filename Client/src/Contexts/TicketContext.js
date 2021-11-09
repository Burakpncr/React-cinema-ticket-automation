import { createContext , useState , useContext } from 'react'

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [ticketList, setTicketList] = useState([]) 

  const values = {
     ticketList,
     setTicketList
   }

  return <TicketContext.Provider value = {values}>{children}</TicketContext.Provider>
}

export const useTicket = () => useContext(TicketContext);