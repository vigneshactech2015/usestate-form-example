import Form from './Form';
import React from 'react';
import {useState} from 'react';
import UserList from './UserList';

function App() {

  const [click,setClick]=useState(false);
const[userList,setUsersList]=useState([]);
  const buttonClickHandler=()=>{
  setClick(!click);
  }

  const cancelHandler=()=>{
    setClick(false);
  }

  //this is callback from child to parent
  const onAddHandler=(anything)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,anything];
    });
  }

  return (
    <div>


   {!click &&<button onClick={buttonClickHandler} type="button">Open form</button>}
    {click && <Form oncancel={cancelHandler} onAdd={onAddHandler}/>}
    {userList.length>0 &&<UserList users={userList}/>}
    {userList.length===0&&<p>no data found</p>}
    </div>
  )
}

export default App
