// import styled components
import styled from "styled-components";

// declare the type for the boolean props
type activeProps = { active: boolean };

//include as a generic next to div
export const StyledDiv = styled.p<activeProps>`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-family: Rubik, sans-serif;
  font-size: 1rem;
  color: #658ba3;
  text-align: center;
  border: 2px solid #192a56;
  border-radius: 32px;
  padding: 16px 16px;
  margin: 8px 16px;
  background-color: ${({ active }) =>
    active ? "#192a56" : "rgba(255,255,255,0.9)"};
`;

// declare the type for the ---- props
type urlimgProps = { urlimg: unknown };

//include as a generic next to div
export const StyledBckgr = styled.div<urlimgProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: center/cover;
  background-image: ${(props) => `url(${props.urlimg})`};
`;
