import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import PlayIconImage from "../assets/play.svg";
import { useNavigate } from "react-router-dom";

interface RippleProps {
  color?: string;
  delay?: string;
}

function PlayButton() {
  const navigate = useNavigate();
  const [ripple, setRipple] = useState(false);

  return (
    <ButtonContainer
      onClick={() => {
        navigate("/result");
      }}
      onMouseEnter={() => setRipple(true)}
      onMouseLeave={() => setRipple(false)}
    >
      {ripple && (
        <>
          <Ripple color="rgba(255, 255, 255, 0.4)" />
          <Ripple color="rgba(255, 201, 217, 0.5)" delay="0.2s" />
          <Ripple color="rgba(255, 158, 196, 0.6)" delay="0.4s" />
        </>
      )}
      <PlayIcon src={PlayIconImage} alt="Play Button" />
    </ButtonContainer>
  );
}

export default PlayButton;

// Float 애니메이션
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

// Ping / Ripple 애니메이션
const ping = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.75;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
`;

const ButtonContainer = styled.button`
  position: relative;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  overflow: visible; /* overflow를 visible로 변경해서 리플이 버튼 밖으로 퍼지게 */
  border: none;
  cursor: pointer;
  background: linear-gradient(130deg, #e2e2e2, #ec4899);

  animation: ${float} 3s ease-in-out infinite;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(130deg, #e2e2e2, #ec4899);
  }
`;

const Ripple = styled.span<RippleProps>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: ${(props) => props.color || "rgba(255,255,255,0.5)"};
  animation: ${ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  animation-delay: ${(props) => props.delay || "0s"};
  pointer-events: none; /* 리플이 클릭 이벤트를 막지 않도록 */
`;

const PlayIcon = styled.img`
  position: relative;
  z-index: 10;
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;

  ${ButtonContainer}:hover & {
    transform: scale(1);
  }
`;
