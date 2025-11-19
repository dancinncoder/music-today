import React from "react";
import MovingTitle from "../../components/MovingTitle";
import MusicSelectStartContainer from "../../components/MusicSelectStartContainer";
import { styled } from "styled-components";

function HomePage() {
  return (
    <HomePageContainer>
      <div>
        <MusicSelectStartContainer />
      </div>
    </HomePageContainer>
  );
}

export default HomePage;

const HomePageContainer = styled.div`
  /* background-color: black; */
`;
