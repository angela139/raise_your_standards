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
    <div className="login">
    <section className="container-fluid">
      <section className="row justify-content-center">
      <section className="col-12 col-sm-12 col-md-6">
      <div className="login__container">
        <h3 className="text-center">Raise Your Standards</h3>
        <div className="form-group">
            <label for="email" className="form-label">Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="Email"/>
        </div>
        <div className="form-group">
            <label for="password" className="form-label">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" placeholder="Password"/>
        </div>
        <br></br>
        <div className="text-center">
        <button className="btn btn-primary btn-lg btn-block login-button" type="submit" onClick={() => signInWithEmailAndPassword(email, password)}>Login</button>
        <br></br><br></br>
        <button className="btn btn-lg btn-block btn-secondary login-button" type="submit" onClick={signInWithGoogle}> Sign in with Google</button>
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