import { signInWithPopup, signOut } from "firebase/auth";
import React from 'react';
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Logout.css"

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  
  return (
    <div className="logoutPage">
      <h2>ログアウトする</h2>
      <button className="logoutButton" onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout;
