import { createContext, useEffect } from "react";
import {
  BuscarCategorias,
  EditarCategorias,
  EliminarCategorias,
  InsertarCategorias,
} from "../supabase/crudCategorias";
import { supabase } from "../supabase/supabase.config";
import { MostrarUsuarioXIdAuthSupabase, MostrarCategorias } from "../index";
import { useState } from "react";
import { useContext } from "react";

const CrudContext = createContext();
export function CrudContextProvider({ children }) {
  const [dataUsuarios, setDatausuarios] = useState([]);
  const [datacategoria, setDatacategoria] = useState([]);
  async function insertarCategorias(p, file) {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    await InsertarCategorias(p, idAuthSupabase, file);
  }
  async function mostrarCategorias() {
    try {
      const data = await mostrarUsuarios();
      const idusuario = data.id;

      const result = await MostrarCategorias(idusuario);
      setDatacategoria(result);
    } catch (error) {}
  }
  async function mostrarUsuarios() {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    const data = await MostrarUsuarioXIdAuthSupabase(idAuthSupabase);
    setDatausuarios(data[0]);
    return data[0];
  }
  useEffect(() => {
    mostrarCategorias();
  }, []);
  async function editarCategorias(p,file){
     const idAuthSupabase = await obtenerAuthSupabaseXuser();
     await EditarCategorias(p,dataUsuarios.id,file,idAuthSupabase);
  }
  async function eliminarCategorias(id) {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    const idusuario = dataUsuarios.id;
    await EliminarCategorias(id, idusuario, idAuthSupabase);
    setDatacategoria(datacategoria.filter((data) => data.id !== id));
  }
  async function obtenerAuthSupabaseXuser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session != null) {
      const { user } = session;
      const idAuthSupabase = user.id;
      return idAuthSupabase;
    }
  }
  async function buscarCategorias(buscador){
      const idusuario = dataUsuarios.id;
      const result = await BuscarCategorias(buscador,idusuario)
      setDatacategoria(result);
  }
  return (
    <CrudContext.Provider
      value={{
        dataUsuarios,
        insertarCategorias,
        datacategoria,
        setDatacategoria,
        eliminarCategorias,editarCategorias,mostrarCategorias,buscarCategorias
      }}
    >
      {children}
    </CrudContext.Provider>
  );
}
export const CrudSupabaseContext = () => {
  return useContext(CrudContext);
};
