import React from "react";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { FaHourglassStart } from "react-icons/fa";

export const TimeLine = () => {
  return (
    <>
      <div>
        <h1 className="text-center">Round 1</h1>
        
        <Timeline
          mode="alternate"
          items={[
            {
              color: "green",
              label: "Day 1 (11 March at 10:00 AM)",
              children: "Release of Problem Statement",
            },
            {
              color: "gray",
              label: "Day 1 (11 March at 12:00 PM)",
              children: "Lock the Options + Hackathon starts",
            },
            {
              color: "red",
              label: "Day 2 (12 March at 11:59 PM)",
              children: "Hackathon Ends",
            },
          ]}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center">Round 2</h1>
        <Timeline
          mode="alternate"
          items={[
            {
              color: "green",
              label: "Day 3 (16 March at 08:30 AM)",
              children: "Reporting Time",
            },
            {
              color: "yellow",
              label: "Day 3 (16 March at 09:00 AM)",
              children: "Release of Improved Problem Statement",
            },
            {
              dot: <ClockCircleOutlined className="timeline-clock-icon" />,
              color: "green",
              label: "Day 3 (16 March at 09:30 AM)",
              children: "Hackathon Starts",
            },
            {
              dot: <ClockCircleOutlined className="timeline-clock-icon" />,
              color: "red",
              label: "Day 3 (16 March at 04:00 PM)",
              children: "Offline round ends",
            },
            {
              dot: <FaHourglassStart />,
              color: "green",
              label: "Day 3 (16 March at 04:00 PM)",
              children: "Evaluation Starts",
            },
            {
              dot: <FaHourglassStart />,
              color: "red",
              label: "Day 3 (16 March at 06:00 PM)",
              children: "Tentative Evaluation Ends",
            },
          ]}
        />
      </div>
    </>
  );
};
