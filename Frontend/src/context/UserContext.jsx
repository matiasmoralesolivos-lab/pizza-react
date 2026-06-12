import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  // LOGIN
  const login = async (email, password) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      } else {
        alert(data.error || "Error al iniciar sesión");
        return false;
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
      return false;
    }
  };

  // REGISTER
  const register = async (email, password) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return true;
      } else {
        alert(data.error || "Error al registrar usuario");
        return false;
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión");
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    setToken(null);
    setEmail("");
  };

  // PERFIL
  const getProfile = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setEmail(data.email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;