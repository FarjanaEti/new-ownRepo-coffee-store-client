import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedData=useLoaderData(); 
    const [users,setUser]=useState(loadedData)  
    
    const handleUserDelete= id =>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5000/users/${id}`,{
     method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
       console.log('daata deleted',data) 
       if(data.deletedCount){
          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success" 
    });
    setUser(users.filter((user) => user._id !== id));
       }                      
    })
  }
});
    }
 return (
  <div>
         <h2>users{users.length}</h2>  
         <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Time</th>
        <th>Acton</th>
        <th>last LOgin</th>
      </tr>
    </thead>
    <tbody>
     {
       users.map(user=> <tr key={user._id}>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.createdAT}</td>
        <td>{user.lastSignInTime}</td>
        <td>
          <button className='btn'>E</button>                    
          <button className='btn' onClick={()=>handleUserDelete(user._id)}>X</button>                    
        </td>
      </tr>)                       
     }
    </tbody>
  </table>
</div>                                                                               
  </div>
  );
};

export default Users;