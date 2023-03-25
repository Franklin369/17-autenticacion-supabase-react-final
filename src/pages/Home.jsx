import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
import { UserAuth } from "../context/AuthContext";
export function Home() {
  const {user,signout} = UserAuth();

  return ( <div className="App">
   <Perfil foto={user.picture} name={user.name} email={user.email}/>
   
 

  <h1>SUPABASE es COOL</h1>
  <img src={googlelogo} className="logo google" alt="React logo" />
  <div className="card">
    <button onClick={signout}>Cerrar sesión</button>
    <p>codigo369.com</p>
  </div>
  <p className="read-the-docs">
    Supabase implementa todo el poder de PostgreSQL
  </p>
</div>);
}
