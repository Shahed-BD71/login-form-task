import React from "react";
import "./App.css";
export default function App() {
  return (
    <section className="container">
      <form className="form-area">
        <div className="form-header">
          <h2>Sign Up</h2>
          <p>Please Fill up in this Form to creat an account</p>
          <hr />
        </div>
        <label>Email</label>
        <input type="email" placeholder="Enter Email" utoFocus required></input>
        <p className="errorMsg"></p>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          autoFocus
          required
        ></input>
        <p className="errorMsg"></p>
        <label>Repeat Password</label>
        <input
          type="confirm_password"
          placeholder="Repeat Password"
          autoFocus
          required
        ></input>
        <p className="errorMsg"></p>
        <div className="form-footer">
          <p>
            By creating an account you agree to our{" "}
            <a href="">Terms & Privacy</a>
          </p>
        </div>
        <div className="btn-container">
          <button id="cancel">Cancel</button>
          <button id="sign-up">Sign Up</button>
        </div>
      </form>
    </section>
  );
}
