import React, { useState } from "react";
import Joi from "joi-browser";

import { validate, handleChange, handleSubmit } from "./helpers/form";

export default function LoginForm() {
  const [data, setData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const schema = {
    username: Joi.string().required("Username"),
    password: Joi.string().required("Password"),
  };

  const doSubmit = () => {
    console.log("Submitted");
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form
        onSubmit={(e) =>
          handleSubmit(e, data, schema, errors, setErrors, doSubmit)
        }
        className="container w-50 m-auto"
      >
        <div className="form-group mt-3">
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            onChange={(e) =>
              handleChange(e, schema, data, setData, errors, setErrors)
            }
            id="username"
            type="text"
            className="form-control mt-2"
          />
          {errors.username && (
            <div className="alert alert-danger">{errors.username}</div>
          )}
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) =>
              handleChange(e, schema, data, setData, errors, setErrors)
            }
            id="password"
            type="text"
            className="form-control mt-2"
          />
          {errors.password && (
            <div className="alert alert-danger">{errors.password}</div>
          )}
        </div>
        <div className="mt-3">
          <button disabled={validate(data, schema)} className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
