import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../Firebase/Firebase";
import { Form, Input } from "antd";
import { Buttons } from "../../../Utils/Components";
import "../Auth.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(userCredential);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth">
      <div className="auth__cicle"></div>
      <Form className="auth__form" onSubmit={handleRegister}>
        <h2 className="auth__title">Register</h2>
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
        <Buttons type="submit" text="Register" />
        <p>{error}</p>
        <p className="auth__txt">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
