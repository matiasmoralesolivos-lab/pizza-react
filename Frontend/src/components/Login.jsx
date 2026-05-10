import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (evento) => {
    setEmail(evento);
  };
  const handleChangePassword = (evento) => {
    setPassword(evento);
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("los campos email y contraseña no pueden estar vacíos");
      return;
    }

    if (!email.includes("@")) {
      alert("el correo electrónico debe contener un '@'");
      return;
    }

    if (password.length < 6) {
      alert("la contraseña debe tener al menos 6 caracteres");
      return;
    }

    alert("Autenticación exitosa");
    console.log("Formulario enviado");
  };

  return (
    <form
      className="form"
      action=""
      noValidate
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>iniciar sesion</h2>
      <br />
      <label htmlFor="Email">Ingrese su correo electrónico</label>
      <br />
      <input
        type="email"
        id="Email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(evento) => {
          handleChangeEmail(evento.target.value);
        }}
      />
      <br />
      <label htmlFor="Password">Ingrese su contraseña</label>
      <br />
      <input
        type="password"
        id="Password"
        placeholder="Contraseña"
        value={password}
        onChange={(evento) => {
          setPassword(evento.target.value);
        }}
      />
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default Login;
