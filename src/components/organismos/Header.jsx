import styled from "styled-components";
import supabaseImage from "../../assets/supabasebg.jpg";
import { DatosUser } from "../../index";
export function Header() {
  return (
    <Container>
      <div className="imageContent">
        <img src={supabaseImage} />
      </div>
      <div className="details">
        <h1 className="title">Supabase</h1>
        <p className="description">
          Disfruta de todo el poder de una base de datos relacional PostgreSQL
          con un backend listo para ti.
        </p>
      </div>
      <DatosUser />
    </Container>
  );
}
const Container = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #1cc561,
    #17ab55,
    #149148,
    #11783c,
    #0e6030
  );
  margin: -20px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
  .imageContent {
    border-radius: 20px;
    overflow: hidden;
    margin: 20px;
    display: none;
    align-items: center;
    box-shadow: 23px 22px 73px -15px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 23px 22px 73px -15px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 23px 22px 73px -15px rgba(0, 0, 0, 0.6);
    height: 250px;
    max-width: 120px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 1;
    }
    @media (min-width: 64rem) {
      display: flex;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #e0dede;
    position: relative;
    z-index: 0;
    transform:scale(0.8);
    margin-top:12%;
    .title {
      color: white;
      font-size: 3.5rem;
    }
    
   
    @media (min-width: 64rem) {
      transform:scale(1);
      margin-top:0;
    }
  }
`;
