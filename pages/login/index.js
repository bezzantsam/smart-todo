import React from "react";
import Navbar from "../../comps/Navbar/Navbar";
import container from "../../styles/Container.module.css";

const Login = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className={container.container}>
      <Navbar />
      <h1>Login Component</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input></input>
      </form>
      <form onSubmit={handleSubmit}>
        <label>Password</label>
        <input></input>
      </form>
    </div>
  );
};

export default Login;
