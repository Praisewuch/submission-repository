import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setall] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const setAverageScore = (goodCount, neutralCount, badCount) => {
    const totalCount = goodCount + neutralCount + badCount;
    if (totalCount === 0) {
      setAverage(0); // Avoid division by zero
    } else {
      const score =
        (goodCount * 1 + neutralCount * 0 + badCount * -1) / totalCount;
      setAverage(score);
    }
  };
// the good button function 
  const onGood = () => {
    let updatedGood = good + 1;
    var sum = updatedGood + neutral + bad;
    setGood(updatedGood);
    setall(sum);
    setAverageScore(updatedGood, neutral, bad);

    let calculate = (updatedGood / sum) * 100;
    setPositive(calculate);
  };

// the neutral button  function 

  const onNetural = () => {
    let updatNeutral = neutral + 1;
    setNeutral(updatNeutral);
    setall(updatNeutral + good + bad);
    let sum = updatNeutral + good + bad;
    setAverageScore(good, updatNeutral, bad);
    setPositive((good / sum) * 100);
  };

  // the bad button function
  const onBad = () => {
    let updatBad = bad + 1;
    setBad(updatBad);
    setall(neutral + good + updatBad);
    let sum = good + updatBad + neutral;
    setPositive((good / sum) * 100);
    setAverageScore(good, neutral, updatBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onGood={onGood} onNetural={onNetural} onBad={onBad} />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
