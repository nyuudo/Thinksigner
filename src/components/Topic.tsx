import { StyledTopic, TopicWrapper } from "./App.styles";
import type { TopicProps } from "../types";
export const Topic = ({ id, title, text, currentTopic }: TopicProps) => {
  const isActive = currentTopic === id;
  return (
    <TopicWrapper active={isActive} topicid={id}>
      <StyledTopic active={isActive} activeid={id}>
        <h1>{title}</h1>
        <p>{text}</p>
      </StyledTopic>
    </TopicWrapper>
  );
};
