import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordResetEmail } from "./firebase";
import "./Login.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard", { replace: true });
  }, [user, loading]);
  return (
    <div class="login">
      <section class="container-fluid">
      <section class="row justify-content-center">
      <section class="col-12 col-sm-12 col-md-6">
      <div class="login__container">
      <h3>Raise Your Standards</h3>
      <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control form-control-lg" placeholder="Email"/>
        </div>
        <br></br>
        <button class="btn btn-primary btn-lg btn-block login-button" type="submit" onClick={() => sendPasswordResetEmail(email)}>Send Reset Email</button> 
        <br></br>
        <br></br>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
      </section>
      </section>
      </section>
    </div>
  );
}
export default Reset;