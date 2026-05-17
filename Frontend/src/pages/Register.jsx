import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (evento) => {
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

    alert("Registro exitoso");
    console.log("Formulario enviado");
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
        onChange={(evento) =>
          setEmail(evento.target.value)
        }
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
        onChange={(evento) =>
          setPassword(evento.target.value)
        }
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
        onChange={(evento) =>
          setConfirmPassword(evento.target.value)
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