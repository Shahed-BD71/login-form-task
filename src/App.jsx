import React, { useReducer } from "react";
import "./App.scss";
import Reducer from "./Reducer";

export default function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repeatPass, setRepeatPass] = useState("");
  // const [checked, setChecked] = useState(true);

  const initialState = {
    email: "",
    password: "",
    repeatPass: "",
    checked: true,
  };

  const [formState, dispatch] = useReducer(Reducer, initialState);
  const isMatchPassword = formState.password !== formState.repeatPass ;

  const clearInputs = () => {
    dispatch({
      type: "CLEAR_FORM",
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "HANDLE_INPUT_FIELD",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  
  const handleCancel = (event) => {
    event.preventDefault();
    clearInputs();
  };

  return (
    <section className="container">
      <form className="form-area">
        <div className="form-header">
          <h2>Sign Up</h2>
          <p>Please Fill up in this Form to creat an account</p>
          <hr />
        </div>
        <label>Email</label>
        <input
          value={formState.email}
          onChange={(e) => handleSubmit(e)}
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
          name="password"
          placeholder="Enter Password"
          autoFocus
          required
          value={formState.password}
          onChange={(e) => handleSubmit(e)}
        ></input>
        <p className="errorMsg"></p>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeatPass"
          placeholder="Repeat Password"
          autoFocus
          required
          value={formState.repeatPass}
          onChange={(e) => handleSubmit(e)}
        ></input>
        <span className="errorMsg">
          {isMatchPassword? (
            <p>Password not match</p>
          ) : null}
        </span>
        <div className="form-footer">
          <input
            onChange={() => dispatch({ type: "HANDLE_CHECKBOX" })}
            type="checkbox"
            defaultChecked={formState.checked}
          />
          <span>Remember Me</span>
          <p>
            By creating an account you agree to our{" "}
            <a href="">Terms & Privacy</a>
          </p>
        </div>
        <div className="btn-container">
          <button onClick={handleCancel} type="submit" id="cancel">
            Cancel
          </button>
          <button disabled={isMatchPassword} type="submit" id="sign-up">
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}
