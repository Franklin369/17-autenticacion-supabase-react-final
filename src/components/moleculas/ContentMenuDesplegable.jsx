import styled from "styled-components";
import { v, ItemsDesplegable } from "../../index";
export function ContentMenuDesplegable({datadesplegable,top,funcion}) {
  return (
    <Container top={top}>
      {datadesplegable.map((item,index)=>{
        return(
          <ItemsDesplegable funcion ={()=>funcion(item.tipo)} key={index} text={item.text} icono={<item.icono/>}/>
        )
      })}
      
    </Container>
  );
}
const Container = styled.div`
  width:100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.top};
  box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);
  z-index: 10;
`;
