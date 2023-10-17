import { ControlsArea, ButtonCurrent, ButtonClose } from "./App.styles";
import type { ControlsProps } from "../types";

export const Controls = ({ back, ahead, start }: ControlsProps) => {
  return (
    <ControlsArea>
      <ButtonCurrent onClick={back}>‹</ButtonCurrent>
      <ButtonCurrent onClick={ahead}>›</ButtonCurrent>
      <ButtonClose onClick={start}>CLOSE</ButtonClose>
    </ControlsArea>
  );
};
