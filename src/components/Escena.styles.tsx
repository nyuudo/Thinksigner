// import styled components
import styled from "styled-components";

// declare the type for the boolean props
type activeProps = { active: boolean };

//include as a generic next to div
export const StyledDiv = styled.div<activeProps>`
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  font-family: Rubik, sans-serif;
  font-size: 1rem;
  color: #95afc0;
  text-align: center;
  border: 2px solid #192a56;
  border-radius: 32px;
  padding: 16px 16px;
  margin: 8px 16px;
  background-color: ${({ active }) => (active ? "#192a56" : "white")};
`;
