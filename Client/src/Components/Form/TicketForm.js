import { useState } from 'react'
import InputMask from "react-input-mask";
import { useTicket } from '../../Contexts/TicketContext'
import './TicketForm.css'

function TicketForm(props) {
  const {ticketList , setTicketList } = useTicket();
  const {setopenForm , id} = props;
  const [form, setForm] = useState({id:id, firstName: "", lastName: "", phone: "",price:"" })
 
  const handleOnChange = (e) => {
    if (e.target.name === "phone") {
      const re = /[^0-9\s]|\s+$/gi;
      let str = e.target.value;
      str = str.replace(re, '');
      str.toString()
      setForm({ ...form, phone: str })
    }
    else {
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSave = () => {
    setTicketList([...ticketList,form])
    setopenForm(false)
  }

  return (
    <div className="popup">
      <div className="popup_inner">
        <h3>Ticket Form</h3>
        <div className="Form-Wrapper">
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
              <input type="text" name="firstName" value={form.firstName} onChange={handleOnChange} className="form-control" id="inputPassword" />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
              <input type="text" name="lastName" value={form.lastName} onChange={handleOnChange} className="form-control" id="inputPassword" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <InputMask mask="+90 (999) 999-99-99" className="form-control" name="phone" value={form.phone} onChange={handleOnChange} />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Price</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" name="price" value={form.price} onChange={handleOnChange} />
            </div>
          </div>
          <button type="button" className="btn btn-outline-primary" onClick={handleSave}>Save</button>

        </div>
      </div>
    </div>
  )
}

export default TicketForm
