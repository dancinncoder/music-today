import React from "react";
import { styled } from "styled-components";

type VideoData = {
  id: string;
  videoId: string;
  songTitle: string;
  artistName: string;
};

type YouTubePlayerProps = {
  videoData: VideoData; // videoId + title + artist 등 전체
};

function YouTubePlayer({ videoData }: YouTubePlayerProps) {
  const { id, videoId, songTitle, artistName } = videoData;
  return (
    <CircularContainer>
      <IframeWrapper>
        <StyledIframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </IframeWrapper>
    </CircularContainer>
  );
}

export default YouTubePlayer;

const CircularContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden; /* 원형 밖으로 나가는 부분 숨김 */
  background: #000;
  /* box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); */
`;

const IframeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240%; /* 원형을 꽉 채우기 위해 크게 설정 */
  height: 240%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border: none;
`;
