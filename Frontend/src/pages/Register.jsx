import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Register() {
  const { register } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Todos los campos son obligatorios");
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

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const success = await register(email, password);

    if (success) {
      alert("Registro exitoso");
    }
  };

  return (
    <form
      className="form"
      noValidate
      onSubmit={handleSubmit}
    >
      <h2>Registro</h2>

      <br />

      <label htmlFor="email">
        Ingrese su correo electrónico
      </label>

      <br />

      <input
        type="email"
        id="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <label htmlFor="password">
        Ingrese su contraseña
      </label>

      <br />

      <input
        type="password"
        id="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <label htmlFor="confirmPassword">
        Confirme su contraseña
      </label>

      <br />

      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) =>
          setConfirmPassword(e.target.value)
        }
      />

      <br />

      <button type="submit">
        Registrarse
      </button>
    </form>
  );
}

export default Register;