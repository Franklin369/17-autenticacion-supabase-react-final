import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom"
export function Perfil() {

  const { user } = UserAuth();
  const navigate = useNavigate();
  function volver(){
navigate("/",{replace:true})
  }
  return (
    <Container>
      <Subcontainer>
        <div className="profile-image">
          <div className="borde">
            <img src={user.picture} />
          </div>
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <small className="profile-user-email">{user.email}</small>
        <div className="profile-actions">
          <button className="btn btn-volver" onClick={volver}>Volver</button>
        
        </div>
      </Subcontainer>
    </Container>
  );
}
const Container = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.bgtotal};

`;
const Subcontainer = styled.div`
 display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  width: 90%;
  max-width: 300px;
  background-color: #161718;
  border-radius: 16px;
  position: relative;
  border: 3px solid transparent;
  background-clip: padding-box;
  text-align: center;
  color: #f1f3f3;
  .profile-image{
    width: 175px;
    height: 175px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 8px 60px -10px rgba(160, 204, 236, 0.6);
    background: #fff;
    padding: 8px;
    animation: flotar 1s ease-in-out infinite;
    .borde{
      height: 100%;
      width: 100%;
      border-radius: 50%;
      display: flex;
      overflow: hidden;
      img{
        object-fit:cover;
        height: 100%;
        width: 100%;
      }
    }
  }
.profile-username{
  font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
}
.profile-user-email{
  margin-top: 0.8rem;
  color: #7d8396;

}
.profile-actions{
  margin-top: 1.5rem;
  display: flex;
    align-items: center;
    justify-content: center;
    
  .btn{
    border: 0;
    padding: 0;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      line-height: 1;
      transition: 0.15s ease;
      &-volver{
        border-radius: 99em;
        background-color: #3772ff;
        background-image: linear-gradient(135deg, #5587ff, #3772ff);
        color: #fff;
        padding: 0 1.375em;
        &:hover,
        &:focus {
          background-size: 150%;
        }
      }
  }

}
@keyframes flotar {
  0%{
    transform: translatey(0px);

  }
  50%{
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100%{
    transform: translatey(0px);
  }
}
`;
