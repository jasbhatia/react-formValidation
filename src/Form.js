import React, { useState } from "react";

const Form = () => {
  const initialVal = { username: "", email: "", password: "", confirmPwd: "" };
  const [values, setValues] = useState(initialVal);

  const [error, setError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [sucess, setSucess] = useState("");

  // function on submit////////
  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    validate(values);
  }

  function validate(values) {
    if (
      values.username.trim() === "" ||
      values.email.trim() === "" ||
      values.password.trim() === ""
    ) {
      setError("Fields can not be empty!");
      // setValues(initialVal);
      return;
    }

    if (values.password !== values.confirmPwd) {
      setPwdError("Password does not match!");
      setError("");
      // setPwdError("");
      setSucess("");
      return;
    } else {
      setSucess("Successful Sign In!");
      setError("");
      setPwdError("");
      setValues(initialVal);
    }
  }

  return (
    <div id="container">
      <h1 id="heading">LOGIN FORM</h1>
      <input
        type="text"
        placeholder="Name"
        name="username"
        value={values.username}
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPwd"
        value={values.confirmPwd}
        placeholder="Confirm Password"
        onChange={handleChange}
      />

      {pwdError && <p className="error msg">{pwdError}</p>}

      {error && <p className="error msg">{error}</p>}

      {sucess && <p className="sucess msg">{sucess}</p>}

      <button id="submit-btn" onClick={handleSubmit}>
        Signup
      </button>
    </div>
  );
};

export default Form;
