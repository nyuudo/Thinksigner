// import JSON file "as it is" without defining a constant or export to avoid TypeScript Error
import scenes from "./data/scenes.json";
import { Escena } from "./components/Escena";
import { Header } from "./components/Header";
import { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Background } from "./components/Background";

function App() {
  // define the state of Welcome component
  const [firstPage, setFirstPage] = useState(true);
  const [currentScene, setCurrentScene] = useState(1);
  const [background, setBackground] = useState(`img/1.jpg`);

  // define a function that will be used by the right button
  const GoAhead = () => {
    if (currentScene < scenes.length) {
      setCurrentScene(currentScene + 1);
      setBackground(`img/${currentScene + 1}.jpg`);
    }
    if (currentScene >= scenes.length) {
      setCurrentScene(1);
      setBackground(`img/1.jpg`);
    }
  };
  // define a function that will be used by the left button
  const GoBack = () => {
    if (currentScene <= scenes.length) {
      setCurrentScene(currentScene - 1);
      setBackground(`img/${currentScene - 1}.jpg`);
    }

    if (currentScene === 1) {
      setCurrentScene(4);
      setBackground(`img/4.jpg`);
    }
  };

  // define a function to set the change of state
  const GoPage = () => {
    setFirstPage(false);
  };

  // return a conditional ternary to hide or show the nextpage
  return firstPage === true ? (
    <Welcome next={GoPage} />
  ) : (
    <>
      <Background imgurl={background}>
        <Header back={GoBack} ahead={GoAhead} />
        {scenes.map((item) => (
          <Escena
            key={item.id}
            id={item.id}
            text={item.escena}
            currentScene={currentScene}
          />
        ))}
      </Background>
    </>
  );
}
export default App;
