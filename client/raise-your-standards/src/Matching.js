import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import 'bootstrap/dist/css/bootstrap.css';
import "./Login.css";

function Matching() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
  }, [user, loading]);
  return (
    <div className="login">
    <section className="container-fluid">
      <section className="row justify-content-center">
      <section className="col-12 col-sm-12 col-md-6">
      <div className="login__container">
        <h3>Time To Find Your Match</h3>
        <div>
          Want to change your profile settings? <Link to="/dashboard">Go back</Link>
        </div>
      </div>
      </section>
      </section>
      </section>
      </div>
  );
}
export default Matching;