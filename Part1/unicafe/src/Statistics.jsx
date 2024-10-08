import React from "react";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  if (all === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatisticsLine text="good" value={good}></StatisticsLine>
        </tr>
        <tr>
          <StatisticsLine text="neutral" value={neutral}></StatisticsLine>
        </tr>
        <tr>
          <StatisticsLine text="bad" value={bad}></StatisticsLine>
        </tr>
        <tr>
          <StatisticsLine text="all" value={all}></StatisticsLine>
        </tr>
        <tr>
          <StatisticsLine text="average" value={average}></StatisticsLine>
        </tr>
        <tr>
          <StatisticsLine
            text="positive"
            value={`${positive.toFixed(2)}%`}
          ></StatisticsLine>
        </tr>
      </tbody>
    </table>
  );
};

export default Statistics;
