import { supabase } from "./supabase.config";

export const InsertarUsuarios = async (p) => {
  const result = await MostrarUsuarioXIdAuthSupabase(p.idauth_supabase);
  if (result.length == 0) {
    try {
      const { data } = await supabase.from("usuarios").insert(p).select();
      return data;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  }
};
export const MostrarUsuarioXIdAuthSupabase = async (idauth_supabase) => {
  try {
    const { error, data } = await supabase
      .from("usuarios")
      .select("id,nombres,foto,idauth_supabase,correo")
      .eq("idauth_supabase", idauth_supabase);
   
   return data;
  } catch (error) {
    alert(error.error_description || error.message);
  }
};
