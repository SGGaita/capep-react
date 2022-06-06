import React, { useState, useContext } from 'react'
import "./login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload:user})
      navigate("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error ${errorCode}. Message: ${errorMessage}`)
    });
  }
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="top">
          <div className="logo">
            CAPEP KENYA
          </div>
        </div>
        <div className="center">
          <form onSubmit={handleLogin}>
            {error && <span>Wrong email or password</span>}
            <input type="email" placeholder="Enter your email" onChange={e=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}


export { Login }