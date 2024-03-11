import { useState, ChangeEvent, MouseEvent, SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useMainContext } from "../contextComponent"
import './LoginForm.css';
import User from "../../types/User";
import { login } from "../../services/UserApi";

const initialState:Partial<User> = {
  email: '',
  password: ''
}

export const LoginForm = () => {
  const navigate = useNavigate();
  const { user, setUser } = useMainContext();
  const [formValues, setFormValues] = useState(initialState);

  // changes in the login form
  function changeHandler (e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value});
  }

  // submitting login form
  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    async function logInAndSet (formValues) {
      const { email, password } = formValues;
      const user = { email, password };
      const loggedInUser = await login(user);
      setFormValues(initialState);
      setUser(loggedInUser);
      navigate('/artistList');
    }
    logInAndSet(formValues);
  };



  return (
    <div className="form-wrapper" >
    <form className="form" >
      <h1>LOGIN</h1>
      <input type="email" placeholder="Email" name="email" value={formValues.email} onChange={changeHandler} required={true} ></input>
      <input type="password" placeholder="Password" name="password" value={formValues.password} onChange={changeHandler} required={true} ></input>
      <button type="submit" onClick={handleLogin} >LOGIN</button>
    </form>
    </div>
  )
}