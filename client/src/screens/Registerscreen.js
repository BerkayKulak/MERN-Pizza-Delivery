import React, { useState, useEffect } from "react";

function Registerscreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  function register() {
    if (password != cpassword) {
      alert("Password and Confirm Password must be same");
    } else {
      const user = {
        name,
        email,
        password,
      };
      console.log(user);
    }
  }

  return (
    <div>
      <h1>
        <div className="row justify-content-center mt-5">
          <div className="col-md-5 mt-5 text-left">
            <h2 className="text-center mt-2" style={{ fontSize: "35px" }}>
              Register
            </h2>
            <div>
              <input
                required
                type="text"
                placeholder="name"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                required
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                required
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                required
                type="password"
                placeholder="confirm password"
                className="form-control"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              />
              <button onClick={register} className="btn mt-3">
                Register
              </button>
            </div>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Registerscreen;
