import React, { useState } from 'react'

function Forms() {
  const [name, setName]= useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log('Form submitted with:',name,email,message);
  }


  return (
    <div>
    <h1> Contact Form </h1>
    <form onSubmit={handleSubmit}>
     <div>
      <label>Name</label>
      <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
     </div>
     <div>
      <label>Email</label>
      <input type='text' value={email} onChange={(event) => setEmail(event.target.value)} />
     </div>
     <div>
      <label>Message</label>
      <input type='text' value={message} onChange={(event) => setMessage(event.target.value)} />
     </div>
     <button type='submit' className='btn btn-primary'>Submit</button>


    </form>
      
    </div>
  )
}

export default Forms