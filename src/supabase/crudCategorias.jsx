import { supabase } from "./supabase.config";
import Swal from "sweetalert2";
export async function InsertarCategorias(p, idauthUserSupabase, file) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .insert(p)
      .select();
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya existe un registro con " + p.descripcion,
        footer: '<a href="">Agregue una nueva descripcion</a>',
      });
    }
    if (data) {
      Swal.fire("Registrado", "Dar click a Ok", "success");
    
      const idNuevo = data[0].id;

      const dataImagen = await subirImagen(idauthUserSupabase, idNuevo, file);

      const parametrosStorageEditar = {
        imagen: dataImagen.publicUrl,
        id: idNuevo,
      };
      await EditarCategorias(parametrosStorageEditar, p.idusuario,idauthUserSupabase,file);
      return idNuevo;
    }
  } catch (error) {
    alert(error.error_description || error.message + " insertar categorias");
  }
}
async function subirImagen(idauthUserSupabase, idcategoria, file) {
  const ruta = idauthUserSupabase + "/categorias/" + idcategoria;
  const { data, error } = await supabase.storage
    .from("imagenes")
    .upload(ruta, file, {
      cacheControl: "0",
      upsert: false,
    });
  if (data) {
    const dataImagen = await ObtenerUrlImagen(ruta);
    return dataImagen;
  } else {
    alert("Error al subir imagen", error);
  }
}
async function ObtenerUrlImagen(ruta) {
  const { data } = await supabase.storage.from("imagenes").getPublicUrl(ruta);
  return data;
}

export async function EditarCategorias(p, idusuario, file, idauthUserSupabase) {
  try {
    const { error } = await supabase
      .from("categorias")
      .update(p)
      .eq("idusuario", idusuario)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar categoria", error);
    }

    if (file.length != 0) {
      const ruta = idauthUserSupabase + "/categorias/" + p.id;
      await supabase.storage.from("imagenes").update(ruta, file, {
        cacheControl: "0",
        upsert: true,
      });
    }
  } catch (error) {
    alert(error.error_description || error.message + " editar categorias");
  }
}
export async function EliminarCategorias(id, idusuario, idauthUserSupabaseId) {
  try {
    const { error } = await supabase
      .from("categorias")
      .delete()
      .eq("idusuario", idusuario)
      .eq("id", id);
    if (error) {
      alert("Error al eliminar", error);
    }
    const ruta = idauthUserSupabaseId + "/categorias/" + id;
    await supabase.storage.from("imagenes").remove([ruta]);
  } catch (error) {
    alert(error.error_description || error.message + " eliminar categorias");
  }
}
export async function MostrarCategorias(idusuario) {
  try {
   
    const { data } = await supabase
      .from("categorias")
      .select()
      .eq("idusuario", idusuario)
      .order("id", { ascending: false });
      
    return data;
  } catch (error) {
    alert(error.error_description || error.message + " mostrar categorias");
  }
}
export async function BuscarCategorias(buscador, idusuario) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .select()
      .limit(10)
      .eq("idusuario", idusuario)
      .ilike("descripcion", "%" + buscador + "%");

    if (error) {
      alert("Error al eliminar", error);
    }
    return data;
  } catch (error) {
    alert(error.error_description || error.message + " buscar categorias");
  }
}
