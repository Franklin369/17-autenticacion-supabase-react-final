import styled from "styled-components";
import { UserAuth, Btncircular, v,ContentMenuDesplegable ,DesplegableUser} from "../../index";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
export function DatosUser() {
  const navigate = useNavigate();
  const { user,signout } = UserAuth();
const [openDesplegableUser,setOpenDesplegableUser] = useState(false);
  async function funcionXtipo(tipo){
  if(tipo==="miperfil"){
    navigate("/perfil")
  }
  if(tipo==="cerrarsesion"){
    await signout();
  }
}
  return (
    <Container onClick={()=>setOpenDesplegableUser(!openDesplegableUser)}>
      <div className="imgContainer">
        <img src={user.picture} />
      </div>
      <div className="btncircularContainer">
        <Btncircular
          icono={<v.iconocorona/>}
          width="25px"
          height="25px"
          bgcolor="#ffffff"
          textColor="#181616"
          fontsize="11px"
        />
      </div>
      <span className="nombre">{user.name}</span>
      {
        openDesplegableUser &&(
            <ContentMenuDesplegable top="60px" datadesplegable={DesplegableUser} funcion={(p)=>funcionXtipo(p)}/>
        )
      }
    
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  transition: all 0.3s;
 
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .btncircularContainer{
    position: absolute;
    display: flex;
    transform: translateX(-50px) translateY(-12px);

  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  .nombre{
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
  }
`;
