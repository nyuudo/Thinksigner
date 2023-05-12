// import JSON file "as it is" without defining a constant or export to avoid TypeScript Error
import scenes from "./data/scenes.json";
import { Escena } from "./components/Escena";

function App() {
  return (
    <div>
      {scenes.map((item) => (
        <Escena key={item.id} text={item.escena} />
      ))}
    </div>
  );
}

export default App;
