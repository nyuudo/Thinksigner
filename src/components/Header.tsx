import { HeaderArea, ButtonCurrent } from "./Header.styles";

// define the type of props allowed for the children
type HeaderProps = { back(): void; ahead(): void };

export const Header = (props: HeaderProps) => {
  return (
    <HeaderArea>
      <ButtonCurrent onClick={props.back}>« ANTERIOR</ButtonCurrent>
      <ButtonCurrent onClick={props.ahead}>SEGÜENT »</ButtonCurrent>
    </HeaderArea>
  );
};
