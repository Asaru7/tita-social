import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css"

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="bgGra">
      <div className="glassCard">
      <form
        onSubmit={handleSubmit}
        className="formCard"
      >
        <div className="m-1">
          <label
            htmlFor="email"
            className="m-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className=""
            placeholder="Escriba su correo"
          />
        </div>
        <div className="m-1">
          <label
            htmlFor="Escriba su contraseña"
            className="m-1"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            className=" "
            placeholder="*************"
          />
        </div>

        <div className="d-grid">
          <button
            className=""
            type="submit"
          >
            Iniciar Sesión
          </button>
          <button
        onClick={handleGoogleSignin}
        className=""
      >
        Google login
      </button>
        </div>
      </form>
      </div>
    </div>
  );
}
