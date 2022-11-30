import React , { useState } from 'react';
import './Subscribe.css';
import axios from 'axios';
function Subscribe () {

    //Form States 

    const [email,setEmail] = useState('');

    //submit Event

   const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email);

    const data = {
        email: email
    }
    //Post method to send data to Gsheet
    axios.post('https://sheet.best/api/sheets/3c6b5207-8e23-46c6-a3dc-80b7fcc102a4',data)
    .then((response) => {
        console.log(response);
        //Clearing Form After Submit
        setEmail('');
    } )
   }

    return(
        <div className="email">
        <div className="email_notify" >
        <form id="myForm" onSubmit={handleSubmit}>
         <input
           type="text"
           name="email"
           id="myForm"
           placeholder="Enter your Email"
           className="input_email"
           onChange={(e) => setEmail(e.target.value)}
           value={email}
           required
         />
         <button type="submit">Notify Me</button>
       </form>
       </div></div>
    )
}

export default Subscribe;
