import React from "react";
import { Formik, Form, Field } from "formik";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          alert(`You have logged in ${values.email}`);
        }}
      >
        <Form>
          <label htmlFor="email" className="border-[1px] border-black mr-2">
            Email
          </label>
          <Field
            type="email"
            name="email"
            className="border-[1px] border-black mr-2"
          />
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            className="border-[1px] border-black mr-2"
          />
          <button
            type="submit"
            className="text-white bg-black px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
