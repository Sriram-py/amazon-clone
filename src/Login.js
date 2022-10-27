import React, { useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import "./Login.css"
import {auth} from './firebase';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { async } from '@firebase/util';

function Login() {

  const history = useHistory
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const [user,setUser] = useState({});

  onAuthStateChanged(auth,(currentUser) =>{
    setUser(currentUser)
  })

  const register = async () =>{

    try{
      const user = await createUserWithEmailAndPassword( auth,email,password)
      console.log(user);
      if (user){
          history.push('/')
      }
    }catch (error){
      console.log(error.message);
    }
    //preventDefault()

  };
  const signIn = async () => {
    try{
      const user = await signInWithEmailAndPassword( auth,email,password)
      console.log(user);
      if (user){
         history.push('/')}
    }catch (error){
      console.log(error.message);
    }
    //preventDefault();

  };

  return (
    <div className='login'>
        <Link to='/'>
         <img
         className='login__logo' 
         src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxMRITcqGXU3LUgM3EQtx4aiittmrBUDWkDZSM8KNuRxQzoiFX2SMORFFNfKg48SJ1VA8&usqp=CAU'/>
        </Link>

        <div className='login__container'>
            <h1>Welcome</h1>
            <h3> SignIn </h3>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange=
                {e =>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password}
                onChange={e =>setPassword(e.target.value)}/> 

            </form>

            <button type ='submit' onClick={signIn}
             className='login__signInButton'>SignIn</button>

            <p>
                By continuing, you agree to Amazon's Conditions of use and Privacy Notices.
            </p>

            <button onClick={register}
             className='login__registorButton'>Create your account</button>

            <p>New to Amazon ?</p>
            <h5>user logged in</h5>
            {user?.email}

        </div>
    </div>
  )
}

export default Login