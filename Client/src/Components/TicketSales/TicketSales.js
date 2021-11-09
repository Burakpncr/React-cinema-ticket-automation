import {useState} from 'react'
import TicketForm from '../Form/TicketForm'
import'./TicketSales.css'

function TicketSales() {
    const [openForm, setopenForm] = useState(false);
    const seatList = []
    for (let index = 0; index < 10; index++) {
         seatList.push(index)    
    }
    
    const handleForm = () => {
        setopenForm(!openForm)
    }

    return (
        <div className="Ticket-Container">
            {
                seatList.map(item => {
                    return(
                        <button type="button" key={item} className="Ticket-Button btn btn-outline-dark" onClick={handleForm}>{item + 1}</button>
                    )
                })
            }
            {openForm ? <TicketForm /> : null}
                  
        </div>
    )
}

export default TicketSales
