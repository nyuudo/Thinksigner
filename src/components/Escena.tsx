// import stlye from styles file
import { StyledDiv } from "./App.styles";
// added property type to PROPS
export const Escena = ({
  id,
  text,
  currentScene,
}: {
  id: number;
  text: string;
  currentScene: number;
}) => {
  // use a conditional props to determine the style component
  return (
    <StyledDiv active={currentScene === id ? true : false}>{text}</StyledDiv>
  );
};
