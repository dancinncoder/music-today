import React from "react";
import PlayButton from "./PlayButton";
import { styled } from "styled-components";

function MusicSelectStartContainer() {
  return (
    <div>
      <PlayButton />
      <Subtitle>오늘의 음악을 들어보세요</Subtitle>
    </div>
  );
}

export default MusicSelectStartContainer;

const Subtitle = styled.p`
  color: white;
  padding: 20px 10px 10px;
`;
