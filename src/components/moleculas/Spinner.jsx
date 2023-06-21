import styled from "styled-components";
import { ClimbingBoxLoader
} from "react-spinners";
export function Spinner() {
  return (
    <Container>
      <ClimbingBoxLoader color="#fff" size="25" 
 />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #00bf45;
  transform: all 0.3s;
`;
