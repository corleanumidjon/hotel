import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../../Firebase/Firebase";
import { Button, Form, Input } from "antd";
import { Buttons } from "../../../Utils/Components";
import { FaGoogle } from "react-icons/fa";
import "../Auth.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = () => {
    try {
      auth.signInWithPopup(provider).then((res) => {
        if (res.user.email) {
          dispatch({ email: res.user.email, type: "SEND_EMAIL" });

          navigate("/");
        }
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth">
      <div className="auth__cicle"></div>
      <Form className="auth__form" onSubmit={handleLogin}>
        <h2 className="auth__title">Login</h2>
        <Input
          className="auth__input"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="auth__input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Buttons type="submit" text="Login" />
        <p className="auth__or">{error} or</p>
        <Button className="auth__google" onClick={handleGoogleLogin}>
          <FaGoogle className="auth__icon" /> Sign in with Google
        </Button>
        <p className="auth__txt">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
