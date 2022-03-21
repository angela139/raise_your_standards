import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const standards = [
  "S1: Volume by method of Washers",
  "S2: Volume by method of Cross-sections",
  "S3: Average Value",
  "S4: Work",
  "S5: Integrating powers of trigonometric functions",
  "S6: Integration by Parts",
  "S7: Integration by Partial Fractions",
  "S8: Improper Integrals",
  "S9: Arclength (Cartesian Coordinates, non-parametric)",
  "S10: Surface Area",
  "S11: Tangent slopes of polar functions",
  "S12: Areas bounded by polar functions",
  "S13: Derivatives of Parametric functions",
  "S14: Areas bounded by Parametric functions",
  "S15: Arclength of polar functions",
  "S16: Arclength of Parametric functions",
  "S17: Sequences",
  "S18: Series - Interval of Convergence",
  "S19: Integral Test",
  "S20: Alternating Series Test",
  "S21: Comparson Testing of Series",
  "S22: Ratio Test",
  "S23: Root Test",
  "S24: Power Series",
  "S25: Taylor Series",
  "S26: Lagrange Error Bound",
  "S27: Basic Differential Equations",
  "S28: Slope Fields",
  "S29: Separable Differential Equations",
  "S30: Euler's Method",
  "S31: Logistic Equations",
  "S32: Midpoint Rule",
  "S33: Trapezoid Rule",
  "S34: Simpson's Rule"]
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div class="dashboard">
      <section class="container-fluid">
      <section class="row justify-content-center">
      <section class="col-12 col-sm-12 col-md-6">
       <div class="login__container">
         <h3>Set Up Your Profile</h3>
         <div class="form-group">
            <label for="username" class="form-label">Username</label>
            <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control form-control-lg" placeholder="Username"/>
        </div>
          <div class="form-check">
          <h5 class="move">Strong Standards (have a 4 or 5)</h5>
          {standards.map((item, index) => (
              <div key={index}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">{item}
                </label>
              </div>
          ))}
          </div>
        <h4>Logged in as <span>{name}</span></h4>
         <h6>with <span>{user?.email}</span></h6>
         <br></br>
         <button class="btn btn-primary btn-lg btn-block login-button" onClick={logout}>Logout</button>
       </div>
       </section>
       </section>
       </section>
     </div>
  );
}
export default Dashboard;