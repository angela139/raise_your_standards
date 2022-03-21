import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import 'bootstrap/dist/css/bootstrap.css';
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard", { replace: true });
  }, [user, loading]);
  return (
    <div class="login">
    <section class="container-fluid">
      <section class="row justify-content-center">
      <section class="col-12 col-sm-12 col-md-6">
      <div class="login__container">
        <h3 class="text-center">Raise Your Standards</h3>
        <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control form-control-lg" placeholder="Email"/>
        </div>
        <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control form-control-lg" placeholder="Password"/>
        </div>
        <br></br>
        <div class="text-center">
        <button class="btn btn-primary btn-lg btn-block login-button" type="submit" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
        <br></br><br></br>
        <button class="btn btn-lg btn-block btn-secondary login-button" type="submit" onClick={signInWithGoogle}> Sign in with Google</button>
        </div>
        <br></br>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
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
export default Login;