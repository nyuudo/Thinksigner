import topics from "./data/topics.json";
import { useState } from "react";
import { Welcome } from "./components/Welcome";
import { Background } from "./components/Background";
import { Controls } from "./components/Controls";
import { Topic } from "./components/Topic";

function App() {
  // define the state of Welcome component
  const [firstPage, setFirstPage] = useState(true);
  const [currentTopic, setCurrentTopic] = useState(1);
  const [background, setBackground] = useState(`img/1.webp`);

  // define a function that will be used by the right button
  const GoAhead = () => {
    if (currentTopic < topics.length) {
      setCurrentTopic(currentTopic + 1);
      setBackground(`img/${currentTopic + 1}.webp`);
    }
    if (currentTopic >= topics.length) {
      setCurrentTopic(1);
      setBackground(`img/1.webp`);
    }
  };
  // define a function that will be used by the left button
  const GoBack = () => {
    if (currentTopic <= topics.length) {
      setCurrentTopic(currentTopic - 1);
      setBackground(`img/${currentTopic - 1}.webp`);
    }

    if (currentTopic === 1) {
      setCurrentTopic(4);
      setBackground(`img/4.webp`);
    }
  };

  // define a function to set the change of state
  const GoPage = () => {
    setFirstPage(false);
  };

  const GoStart = () => {
    setFirstPage(true);
  };

  // return a conditional ternary to hide or show the nextpage
  return firstPage === true ? (
    <Welcome next={GoPage} />
  ) : (
    <>
      <Background imgurl={background}>
        <div>
          {topics
            .filter((item) => item.id === currentTopic)
            .map((item) => (
              <Topic
                key={item.id}
                id={item.id}
                title={item.title}
                text={item.description}
                currentTopic={currentTopic}
              />
            ))}
          <Controls back={GoBack} ahead={GoAhead} start={GoStart} />
        </div>
      </Background>
    </>
  );
}
export default App;
