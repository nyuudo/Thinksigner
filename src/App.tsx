// import JSON file "as it is" without defining a constant or export to avoid TypeScript Error
import scenes from "./data/scenes.json";
import { Escena } from "./components/Escena";
import { Header } from "./components/Header";
import { useState } from "react";
import { Welcome } from "./components/Welcome";

function App() {
  // define the state of Welcome component
  const [firstPage, setPage] = useState(true);
  const [level, setLevel] = useState(1);
  // define a function that will be used by the right button
  const GoAhead = () => {
    if (level < scenes.length) {
      setLevel(level + 1);
    }
    if (level >= scenes.length) {
      setLevel(1);
    }
  };
  // define a function that will be used by the left button
  const GoBack = () => {
    if (level <= scenes.length) {
      setLevel(level - 1);
    }

    if (level === 1) {
      setLevel(4);
    }
  };

  // define a function to set the change of state
  const GoPage = () => {
    setPage(false);
  };

  // return a conditional ternary to hide or show the nextpage
  return firstPage === true ? (
    <Welcome next={GoPage} />
  ) : (
    <div>
      <Header back={GoBack} ahead={GoAhead} />
      {scenes.map((item) => (
        <Escena key={item.id} id={item.id} text={item.escena} level={level} />
      ))}
    </div>
  );
}
export default App;
