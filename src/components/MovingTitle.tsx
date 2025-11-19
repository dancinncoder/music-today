import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styled } from "styled-components";

function MovingTitle() {
  const [today, setToday] = useState<string>("");

  const formDate = () => {
    const baseDate = new Date();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[baseDate.getMonth()];
    const date = baseDate.getDate();
    const suffix =
      date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : "th";
    setToday(`${date}${suffix} ${month}`);
  };

  useEffect(() => {
    formDate();
  }, []);

  if (!today) return null; // wait until date is set

  return (
    <MovingTitleContainer to="/">
      <Title>{today}</Title>
      {/* <TypeAnimation
        sequence={[
          "Today,",
          1100,
          `Today, ${today}`,
          1000,
          "Today,",
          1200,
          "Today, and ?",
          1000,
          "Today, and ? Music",
          1000,
        ]}
        speed={60}
        style={{ fontSize: "2em", fontWeight: "400", color: "white" }}
        repeat={Infinity}
      /> */}
    </MovingTitleContainer>
  );
}

export default MovingTitle;

const MovingTitleContainer = styled(Link)`
  padding: 30px 30px 10px;
`;

const Title = styled.h1`
  font-size: 4.2rem;
  font-weight: 900;
  color: #393939;
  color: #6e394e;
  margin: 0;
  padding: 0;

  // mobile
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }

  // mobile
  @media (max-width: 480px) {
    /* font-size: 1rem; */
  }
`;
