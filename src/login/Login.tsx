import React, { useState } from "react";

import "./Login.scss";

const Login: React.FC<{ submitForm: any }> = ({ submitForm }) => {
  const [values, setValues] = useState({});

  const handleInputChange = ({ target }: { target: any }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formValues = { ...values } as any;

    if (!formValues.user?.trim() || !formValues.password?.trim()) {
      return;
    }

    console.log(formValues);
    submitForm(formValues);
  };

  return (
    <section className="login">
      <h1>Login page</h1>
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input type="text" name="user" onChange={handleInputChange} />
        </div>

        <div className="input-wrapper">
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <button type="submit">Iniciar sesion</button>
      </form>
    </section>
  );
};

export default Login;
