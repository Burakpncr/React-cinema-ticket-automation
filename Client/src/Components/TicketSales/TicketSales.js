import {useState} from 'react'
import TicketForm from '../Form/TicketForm'
import { useTicket } from '../../Contexts/TicketContext'
import'./TicketSales.css'

function TicketSales() {
    const {seatList,ticketList} = useTicket();
    const [openForm, setopenForm] = useState(false);
    const [id, setId] = useState(0)
    
    const handleForm = (index) => {
        setId(index + 1)
        setopenForm(!openForm)
    }
  
    return (
        <div className="Ticket-Container">
            {
                seatList.map(item => {
                    return(
                        <button type="button" key={item} className="Ticket-Button btn btn-outline-dark" onClick={() => handleForm(item)}>{item + 1}</button>
                    )
                })
            }
            {openForm ? <TicketForm setopenForm = {setopenForm} id = {id} /> : null}
                  
        </div>
    )
}

export default TicketSales
