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
