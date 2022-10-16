import "./Header.css";
import { useAuth } from "../../context/AuthContext";

export function Header(){
   const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <header className="Header">
      <img className="Logo sCenter" src="https://titamedia.com/wp-content/uploads/2021/01/liga-tita@2x.png" />
        <span className="text-white sCenter">{user.displayName || user.email}</span>
        <button
          className="sCenter"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </header>
  );
}
