import styled from "styled-components";

export function ItemsDesplegable({ icono, color, text,funcion }) {
  return (
    <Container onClick={funcion}>
      <span className="icono">{icono}</span>
      <span className="texto">{text}</span>
    </Container>
  );
}
const Container = styled.div`
cursor: pointer;
  padding: 8px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap:10px;
  
  &:hover {
    background-color: ${({ theme }) => theme.bg4};
  }
  .icono{
    font-size:28px;
  }
  .texto{
    width: 100vw;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
