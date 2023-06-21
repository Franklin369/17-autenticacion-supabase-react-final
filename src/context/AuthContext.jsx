import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { useNavigate } from "react-router-dom";
import { InsertarUsuarios } from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  async function signInWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error)
        throw new Error("A ocurrido un error durante la autenticación");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function signout() {
    const { error } = await supabase.auth.signOut();
    if (error)
      throw new Error("A ocurrido un error durante el cierre de sesión");
  }
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("supabase event: ", event);
        if (session == null) {
          navigate("/login", { replace: true });
        } else {
          setUser(session?.user.user_metadata);
          const { user } = session;
          console.log("data del usuario", session?.user.user_metadata);
          insertarUsuarios(user.id, user.user_metadata);
          navigate("/", { replace: true });
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);
  const insertarUsuarios = async (idauth_supabase, dataProveedor) => {
    const p = {
      nombres: dataProveedor.name,
      foto: dataProveedor.picture,
      celular: "-",
      correo: dataProveedor.email,
      idauth_supabase: idauth_supabase,
    };
    console.log("idauth_supabase ....", idauth_supabase);
    await InsertarUsuarios(p);
  };
  return (
    <AuthContext.Provider value={{ signInWithGoogle, signout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
