export type activeProps = { active: boolean; activeid: number };
export type urlimgProps = { urlimg: string };
export type ControlsProps = {
  back(): void;
  ahead(): void;
  start(): void;
};
export type WelcomeProps = { next(): void };
export type BackgroundProps = { imgurl: string; children: React.ReactNode };
export type TopicWrapperProps = { active: boolean; topicid: number };
export type TopicProps = {
  id: number;
  title: string;
  text: string;
  currentTopic: number;
};
