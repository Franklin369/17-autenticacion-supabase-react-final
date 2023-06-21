import styled from "styled-components";
import { v } from "../../styles/variables";
export function Btnnuevo({funcion}) {
  return (
    <a>
      <Btn onClick={funcion}>
        <span className="containerText">{<v.agregar />}</span>
      </Btn>
    </a>
  );
}
const Btn = styled.button`

  display: inline-block;
  background-color: #fff;
  outline: none;
  font-weight: 500;
  border: none;
  font-size: 23px;
  padding: 0.9rem 0.9rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: fixed;
  bottom:10px;
  right:10px;
  z-index: 3;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: rgba(31, 31, 31, 0.5);
    color: #fff;
  }
`;
