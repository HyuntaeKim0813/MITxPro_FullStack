import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
    },
    onSubmit: (values) => {
      if (formik.errors.email || formik.errors.passWord) {
        alert("Please fix the errors before submitting.");
      } else {
        alert("Login Successful");
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "Username should be an email";
      if (!values.passWord) errors.passWord = "Field required";
      return errors;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>email</div>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <div>Password</div>
        <input
          id="passWord"
          name="passWord"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.passWord}
        />
        {formik.errors.passWord ? (
          <div style={{ color: "red" }}>{formik.errors.passWord}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
