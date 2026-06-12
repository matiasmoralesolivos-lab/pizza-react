import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Los campos email y contraseña no pueden estar vacíos");
      return;
    }

    if (!email.includes("@")) {
      alert("El correo electrónico debe contener un '@'");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const success = await login(email, password);

    if (success) {
      alert("Autenticación exitosa");
    }
  };

  return (
    <form
      className="form"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2>Iniciar sesión</h2>

      <br />

      <label htmlFor="Email">
        Ingrese su correo electrónico
      </label>

      <br />

      <input
        type="email"
        id="Email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <label htmlFor="Password">
        Ingrese su contraseña
      </label>

      <br />

      <input
        type="password"
        id="Password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button type="submit">
        Iniciar sesión
      </button>
    </form>
  );
}

export default Login;