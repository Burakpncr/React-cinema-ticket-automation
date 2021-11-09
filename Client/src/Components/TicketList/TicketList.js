import React from 'react'
import { useTicket } from '../../Contexts/TicketContext'
import Ticket from './Ticket'
import "./TicketList.css"

function TicketList() {
  const {ticketList} = useTicket();
  return (
    <div className="TicketList-Container">
       <h3> TİCKET LİST </h3>
      <div className="TicketList-Wrapper">
      <Ticket ticketList = {ticketList} />
      </div>
      </div>
              
  )
}

export default TicketList
