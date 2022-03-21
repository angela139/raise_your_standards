import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "./Login.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard", { replace: true });
  }, [user, loading]);
  return (
    <div class="register">
      <section class="container-fluid">
      <section class="row justify-content-center">
      <section class="col-12 col-sm-12 col-md-6">
      <div class="login__container">
      <h3>Raise Your Standards</h3>
        <div class="form-group">
            <label for="name" class="form-label">Full Name</label>
            <input type="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control form-control-lg" placeholder="Name"/>
        </div>
        <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control form-control-lg" placeholder="Email"/>
        </div>
        <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control form-control-lg" placeholder="Password"/>
        </div>
        <br></br>
        <button class="btn btn-primary btn-lg btn-block login-button" type="submit" onClick={register}>Register</button> 
        <br></br><br></br>
        <button class="btn btn-lg btn-block btn-secondary login-button" type="submit" onClick={signInWithGoogle}> Register with Google</button>
        <br></br><br></br>
        <div>
          Already have an account? <Link to="/">Login</Link> now.
        </div>
      </div>
      </section>
      </section>
      </section>
    </div>

  );
}
export default Register;