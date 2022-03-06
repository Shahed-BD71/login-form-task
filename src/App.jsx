import React, { useState } from "react";
import "./App.css";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setRepeatPass("");
  };

  const handleSubmit = (event) => {
    if (password === repeatPass && email) {
      event.preventDefault();
      alert("it works! check your dev tool");
      console.log({ email, password });
      clearInputs();
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    clearInputs();
  };

  return (
    <section className="container">
      <form className="form-area" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Sign Up</h2>
          <p>Please Fill up in this Form to creat an account</p>
          <hr />
        </div>
        <label>Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          placeholder="Enter Email"
          autoFocus
          required
        ></input>
        <p className="errorMsg">{}</p>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          autoFocus
          required
          value={password}
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <p className="errorMsg"></p>
        <label>Repeat Password</label>
        <input
          type="password"
          placeholder="Repeat Password"
          autoFocus
          required
          value={repeatPass}
          onChange={(event) => setRepeatPass(event.target.value)}
        ></input>
        <p className="errorMsg">
          {password !== repeatPass ? <p>Password not match</p> : null}
        </p>
        <div className="form-footer">
          <p>
            By creating an account you agree to our{" "}
            <a href="">Terms & Privacy</a>
          </p>
        </div>
        <div className="btn-container">
          <button onClick={handleCancel} type="submit" id="cancel">
            Cancel
          </button>
          <button type="submit" id="sign-up">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}
