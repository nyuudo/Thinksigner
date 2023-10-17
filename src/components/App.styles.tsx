import styled from "styled-components";
import topics from "../data/topics.json";
import type { activeProps, urlimgProps, TopicWrapperProps } from "../types";

export const WelcomeBckgr = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: center/cover;
  background-image: url(img/cover.webp);
`;

export const WelcomeArea = styled.div`
  margin: auto;
  display: flex;
  gap: 0.875rem;
  flex-direction: column;
  max-width: 20rem;

  h1 {
    color: #004080;
    margin: 0;
    mix-blend-mode: multiply;
  }
  span {
    color: #5e666e;
    mix-blend-mode: multiply;
    margin: 0;
  }
  h2 {
    font-size: 1rem;
    color: #5a5a5a;
    margin: 0;
    mix-blend-mode: multiply;
  }
  p {
    font-size: 0.875rem;
    color: #5a5a5a;
    margin: 0;
    mix-blend-mode: multiply;
  }
`;

export const WelcomeButton = styled.button`
  border: none;
  border-radius: 19px;
  width: 35%;
  height: 38px;
  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  color: #192a56;
  background-color: #f8d12f;
  transition-duration: 0.4s;
  &:hover {
    color: #f8d12f;
    background-color: #192a56;
    scale: 95%;
  }
`;

export const StyledBckgr = styled.div<urlimgProps>`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-end;
  height: 100vh;
  background: center/cover;
  background-repeat: no-repeat;
  background-image: ${({ urlimg }) => `url(${urlimg})`};

  @media (max-width: 1024px) {
    background-position: center top;
  }

  @media (max-width: 768px) {
    background-position: calc(50% + 300px) top;
  }

  @media (max-width: 640px) {
    background-position: calc(50% + 100px) top;
  }

  @media (max-width: 375px) {
    background-position: calc(50% + 200px) top;
  }
`;

export const ControlsArea = styled.header`
  display: flex;
  gap: 0.5rem;
  margin: 2rem 1.25rem;
`;

export const ButtonCurrent = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: #192a56;
  background-color: #f8d12f;
  transition-duration: 0.4s;
  &:hover {
    color: #f8d12f;
    background-color: #192a56;
    scale: 95%;
  }
`;

export const ButtonClose = styled.button`
  width: 76px;
  height: 38;
  border-radius: 19px;
  border: none;
  font-weight: 700;
  text-decoration: none;
  color: #192a56;
  background-color: #f8d12f;
  transition-duration: 0.4s;
  &:hover {
    color: #f8d12f;
    background-color: #192a56;
    scale: 95%;
  }
`;

export const TopicWrapper = styled.div<TopicWrapperProps>`
  margin: 1.25rem;
  max-width: 20.9375rem;
  z-index: ${(props) =>
    props.active ? topics.length + 1 : topics.length - props.topicid};
`;

export const StyledTopic = styled.div<activeProps>`
  h1 {
    color: ${({ activeid }) => {
      if (activeid === 1) return "#1e3899";
      if (activeid === 2) return "#f74672";
      if (activeid === 3) return "#f8d12f";
      if (activeid === 4) return "#2673a7";
      return "white";
    }};
    text-shadow: ${({ activeid }) => {
      if (activeid === 2) return "2px 2px 6px #1a2d31";
      if (activeid === 3) return "2px 2px 6px #1a2d31";
      return "none";
    }};
    mix-blend-mode: ${({ activeid }) => {
      if (activeid === 1) return "multiply";
      if (activeid === 4) return "multiply";
      return "none";
    }};
    margin-block-start: 0rem;
    margin-block-end: 0rem;
  }

  p {
    color: ${({ activeid }) => {
      if (activeid === 3) return "#f8d12f";
      if (activeid === 4) return "#2673a7";
      return "white";
    }};
    text-shadow: ${({ activeid }) => {
      if (activeid === 1) return "2px 2px 6px #1a2d31";
      if (activeid === 2) return "2px 2px 6px #1a2d31";
      if (activeid === 3) return "2px 2px 6px #1a2d31";
      return "none";
    }};
    mix-blend-mode: ${({ activeid }) => {
      if (activeid === 4) return "multiply";
      return "none";
    }};
  }
`;
