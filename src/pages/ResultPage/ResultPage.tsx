import { styled } from "styled-components";
import YouTubePlayer from "../../components/YoutubePlayer";
import MovingTitle from "../../components/MovingTitle";
import { v4 as uuidv4 } from "uuid";
import { useIsMobile } from "../../hooks/useIsMobile";

function ResultPage() {
  const isMobile = useIsMobile();
  const videoList = [
    {
      id: uuidv4(),
      videoId: "1K93ioXL63c",
      songTitle: "Sincerity Is Scary",
      artistName: "The 1975 ",
    },
    {
      id: uuidv4(),
      videoId: "NwOvu-j_WjY",
      songTitle: "Matsuri",
      artistName: "Fujii Kaze",
    },
    {
      id: uuidv4(),
      videoId: "uvFv8wzqnTo",
      songTitle: "Echoes (Guitar Version)",
      artistName: "Roosevelt",
    },
  ];

  const randomVideo = videoList[Math.floor(Math.random() * videoList.length)];

  return (
    <ResultPageContainer>
      <MusicDetailContainer>
        <MovingTitle />
        {/* DESKTOP */}
        {!isMobile && (
          <MusicDetailsInfo isMobile={isMobile}>
            {randomVideo.songTitle} - {randomVideo.artistName}
          </MusicDetailsInfo>
        )}
      </MusicDetailContainer>

      <YouTubePlayer videoData={randomVideo} />
      {/* MOBILE */}
      {isMobile && (
        <MusicDetailsInfo isMobile={isMobile}>
          {randomVideo.songTitle} - {randomVideo.artistName}
        </MusicDetailsInfo>
      )}
    </ResultPageContainer>
  );
}

export default ResultPage;

const ResultPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  // mobile
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }

  // mobile
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const MusicDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MusicDetailsInfo = styled.p<{ isMobile?: boolean }>`
  color: #c9c9c9;
  padding: ${(props) => (props.isMobile ? "15px" : "5px")};
  margin: 0;
`;
