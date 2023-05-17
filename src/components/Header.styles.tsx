import styled from "styled-components";

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
