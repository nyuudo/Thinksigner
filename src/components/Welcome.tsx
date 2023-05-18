import { WelcomeArea, WelcomButton } from "./Welcome.styles";

type WelcomeProps = { next(): void };

export const Welcome = (props: WelcomeProps) => {
  return (
    <WelcomeArea>
      <h1>Benvinguts a aquesta història interactiva</h1>
      <h3>
        Preparats per a fer un viatge al costat del nostre heroi més enllà de
        les estrelles?
      </h3>
      <WelcomButton onClick={props.next}>COMENÇAR</WelcomButton>
    </WelcomeArea>
  );
};
