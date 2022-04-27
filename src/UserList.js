import React from 'react';

function UserList(props) {
  return (
    <div>
    {props.users.map((user,index)=>
        {return(
            <div key={user.index}>
            
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <button>delete</button>
            </div>
        )
    })}
    </div>
  )
}

export default UserList