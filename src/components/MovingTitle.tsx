import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

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
    <div>
      <TypeAnimation
        sequence={[
          "Today, and ?",
          1100,
          `Today, and ? ${today}`,
          1000,
          "Today, and ?",
          1000,
          "Today, and ? Music For U",
          1000,
        ]}
        speed={60}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
    </div>
  );
}

export default MovingTitle;
