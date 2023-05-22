import { HeaderArea, ButtonCurrent } from "./Header.styles";

// define the type of props allowed for the children
type HeaderProps = { back(): void; ahead(): void };

export const Header = ({ back, ahead }: HeaderProps) => {
  return (
    <HeaderArea>
      <ButtonCurrent onClick={back}>« ANTERIOR</ButtonCurrent>
      <ButtonCurrent onClick={ahead}>SEGÜENT »</ButtonCurrent>
    </HeaderArea>
  );
};
