import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";

import {
  Header,
  Buscador,
  Tabla,
  Btnnuevo,
  Registro,
  CrudSupabaseContext,
  supabase
} from "../index";
import { useState } from "react";
import { useEffect } from "react";
export function Home() {
  const { datacategoria, setDatacategoria,mostrarCategorias } = CrudSupabaseContext();
  const [openRegistro, SetopenRegistro] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  useEffect(() => {
    supabase
      .channel("postgresChangesChannel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "categorias",
        },
        (payload) => {
          mostrarCategorias();
          payload.new.imagen != undefined
            ? setDatacategoria((data) => [...data, payload.new])
            : "";
        }
      )
      .subscribe();
  }, []);

  function nuevoRegistro() {
    SetopenRegistro(true);
    setAccion("Nuevo");
    setdataSelect([]);
  }
  return (
    <Container>
      <Header />
      <span className="difuminado"></span>
      {openRegistro && (
        <Registro
          dataSelect={dataSelect}
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
        />
      )}

      <section className="contentBuscador">
        <Buscador />
        <Btnnuevo funcion={nuevoRegistro} />
      </section>
     
      <Tabla
        setdataSelect={setdataSelect}
        rows={datacategoria}
        SetopenRegistro={SetopenRegistro}
        setAccion={setAccion}
      />
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 20px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: relative;
  .difuminado {
    display: block;
    background-color: #0b4f27;
    height: 400px;
    width: 100%;
    border-radius: 50px;
    position: absolute;
    filter: blur(4rem);
    top: 50px;
  }
  .contentBuscador {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
    position:relative;
  }
`;
