import React from 'react'
import "./TicketList.css"
function Ticket({ticketList}) {
  return (
    <div className="Ticket-Wrapper">
       <table className="table">
        <thead>
          <tr>
            <th scope="col">Seat No</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Phone</th>
            <th scope="col">Price</th>

          </tr>
        </thead>
        <tbody>
           
        {
          ticketList.map(ticket => {
            return(
              <tr>
                <th scope="row">{ticket.id}</th>
                <td>{ticket.firstName}</td>
                <td>{ticket.lastName}</td>
                <td>{ticket.phone}</td>
                <td>{ticket.price}</td>
              </tr>
            )
          })
        }
         </tbody>    
           
       </table>

    </div>
  )
}

export default Ticket
