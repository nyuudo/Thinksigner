import styled from "styled-components";

export const WelcomeArea = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-family: Rubik, sans-serif;
  h1 {
    color: #192a56;
    margin-bottom: 0;
  }
  h3 {
    color: #7f7f7f;
  }
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  padding: 0px 42px;
  max-width: 375px;
  height: 375px;
  border-radius: 8px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const WelcomButton = styled.button`
  border: none;
  border-radius: 8px;
  width: 120px;
  height: 60px;
  text-decoration: none;
  color: #fbc531;
  background-color: #192a56;
  transition-duration: 0.4s;
  &:hover {
    color: #192a56;
    background-color: #fbc531;
  }
`;

export const HeaderArea = styled.header`
  display: grid;
  grid-template: 64px/ 1fr 1fr;
  gap: 0.5rem;
  margin: 16px;
`;

export const ButtonCurrent = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-family: Rubik, sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  color: #192a56;
  background-color: #fbc531;
  transition-duration: 0.4s;
  &:hover {
    color: #fbc531;
    background-color: #192a56;
  }
`;

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
