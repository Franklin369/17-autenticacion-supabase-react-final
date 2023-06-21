import styled from "styled-components";
export function Btnicono({ titulo, icono, funcion, bgcolor, textcolor }) {
  return (
    <Btn onClick={funcion} bgcolor={bgcolor} textcolor={textcolor}>
      {icono}
      <span>{titulo}</span>
    </Btn>
  );
}
const Btn = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 700;
  font-size: 17px;
  padding: 0.8em 1.3em 0.8em 0.9em;
  border-color: #c3d97b;
  border-width: 5px;
  border-style: solid;
  letter-spacing: 0.05em;
  border-radius: 16px;
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
  cursor: pointer;
svg{
    font-size:30px;  
    margin-right: 10px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);

}
&:hover{
    svg{
        transform: translateX(5px) rotate(90deg);
    }
}

`;
