import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles.js";

export const HomeAlign = styled.div`
  align-items: center;
  flex-direction: column;
  position: relative;
  display: flex;
  font-weight: 500;
  font-style: oblique;
`;
export const MainLogo = styled.img`
  flex-direction: column;
  width: 80vw;
  max-width: 313px;
  height: auto;
  margin-top: 44px;
`;

export const StartButton = styled.button`
  justify-content: center;
  width: 50vw;
  height: 44px;
  max-width: 200px;
  font-size: 20px;
  background-color: ${pointColor};
  color: white;
  font-weight: 600;
  border-radius: 12px;
  border: 0;
  outline: 0;
  box-shadow: 2px 2px 4px #b3b3b3;
  margin: 44px;
`;
