import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import supabaselogo from "../assets/supabaselogo.png";
import googlelogo from "../assets/logogoogle.png";
import { UserAuth } from "../context/AuthContext";

export function Login() {
  const { signInWithGoogle } = UserAuth();

  return (
    <Container>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />

        <img src={reactLogo} className="logo react" alt="React logo" />

        <img src={supabaselogo} className="logo supabase" alt="Vite logo" />
      </div>
      <h1>Vite + React + Supabase</h1>
      <img src={googlelogo} className="logo google" alt="React logo" />
      <div className="card">
        <button onClick={signInWithGoogle}>Iniciar con Google</button>
        <p>codigo369.com</p>
      </div>
      <p className="read-the-docs">
        Supabase implementa todo el poder de PostgreSQL
      </p>
    </Container>
  );
}
const Container = styled.div`
  background-color: #242424;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  .card {
    display:flex;
    flex-direction:column;
    gap: 20px;
    button{
      color:white;
    }
  }
`;
