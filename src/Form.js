import React from 'react';
import {useState} from 'react';
function Form(props) {
const [name,setName]=useState('');
const [email,setEmail]=useState('');


  const namechangehandler=(event)=>{
  setName(event.target.value);
  }

  const emailchangehandler=(event)=>{
  setEmail(event.target.value);
  }

const submitHandler=(event)=>{
  event.preventDefault();

  if(name.trim().length>8&&(email.includes('@')&&email.trim().length>4)){

  const data={
   name,
   email
    };

  props.onAdd(data);
  setName("");
  setEmail("");
  }
  else{
  window.alert("Invalid credential");
}


}

  return (
    <div>
    <form onSubmit={submitHandler}>
    <div>
    <label>Name</label>
    <input type="text" onChange={namechangehandler} value={name} /></div>
    <div>
    <label>Email</label>
    <input type="email" onChange={emailchangehandler} value={email} />
    
    </div>
    <button type="submit">Add Input</button>
    </form>
    <button type="button" onClick={props.oncancel}>Cancel</button>
    </div>
  )
}

export default Form