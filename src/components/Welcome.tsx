import { WelcomeBckgr, WelcomeArea, WelcomeButton } from "./App.styles";
import type { WelcomeProps } from "../types";

export const Welcome = (props: WelcomeProps) => {
  return (
    <WelcomeBckgr>
      <WelcomeArea>
        <div>
          <h1>Thinksigner</h1>
          <span>think･sign･er | ˈθɪŋkˈzaɪnər |</span>
        </div>
        <div>
          <h2>noun</h2>
          <p>
            A deeply curious <strong>designer</strong> focused on scalable
            solutions, visual metaphors and the implementation of ideas through
            any medium, including code.
          </p>
        </div>
        <WelcomeButton onClick={props.next}>LEARN MORE</WelcomeButton>
      </WelcomeArea>
    </WelcomeBckgr>
  );
};
