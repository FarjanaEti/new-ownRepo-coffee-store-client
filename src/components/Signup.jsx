import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {
       const { createUser  }=useContext(AuthContext)                     
     const handleSignUp=e=>{
         e.preventDefault(); 
         const name=e.target.name.value
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('form sign up', email, password) 

        createUser(email,password)
        .then(res=>{
          console.log(res.user) 
          const createdAT=res.user.metadata.creationTime;
          const newUser={name,email,createdAT};
             fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(newUser)         
        })
        .then(res=>res.json())
        .then(data=>{
          console.log('data created',data)
          if(data.insertedId){
            Swal.fire({
              title: "Good job!",
             text: "You clicked the button!",
              icon: "success"
            })
          }
        })
      })
        .catch(err=>console.log(err))
     }

 return (
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign UP now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">NAme</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default Signup;