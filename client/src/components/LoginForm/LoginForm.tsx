import { useState, ChangeEvent } from "react";
import { useMainContext } from "../contextComponent"
import './LoginForm.css';

const initialState = {
  email: '',
  password: ''
}

export const LoginForm = () => {
  const { user, setUser } = useMainContext();
  const [formValues, setFormValues] = useState(initialState);

  // changes in the login form
  function changeHandler (e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
  }



  return (
    <div className="form-wrapper" >
    <form className="form" >
      <h1>LOGIN</h1>
      <input type="email" placeholder="email" name="email" value={formValues.email} onChange={changeHandler} ></input>
      <input type="password" placeholder="password" name="password" value={formValues.password} onChange={changeHandler} ></input>
      <button type="submit">LOGIN</button>
    </form>
    </div>
  )
}