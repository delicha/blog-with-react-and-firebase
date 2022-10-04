import { signInWithPopup } from "firebase/auth";
import React from 'react';
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  }
  return (
    <div className="loginPage">
      <h2>ログインして始める</h2>
      <button className="loginButton" onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login;
