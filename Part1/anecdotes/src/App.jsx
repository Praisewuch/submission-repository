import { useState } from "react";
import Display from "./Display";
import Votes from "./Votes";
import {useEffect} from 'react'
const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(7).fill(0));
  const [current_vote, setCurrent_vote] = useState(0);

  const onRand = () => {
    let rand = Math.floor(Math.random() * (anecdotes.length-1))
    setSelected(rand);
    setCurrent_vote(rand);
  };

 
  
 
const onVote = () => {
  setVotes(prevVotes => {
    let newVotes = [...prevVotes];
    newVotes[current_vote] += 1;
    return newVotes;
  });
};

let bigest = Math.max(...votes)
let greatest = votes.indexOf(bigest)


// Optional useEffect for debugging to see updated votes
useEffect(() => {
  console.log(votes);
}, [votes]);
  return (
    <div>
      <Display text={anecdotes[selected]} />
      <Votes number={votes[current_vote]} />
      <button onClick={onVote}>vote</button>
      <button onClick={onRand}>next anecdote</button>
      <Display text={anecdotes[greatest]} title={'Anecdote with most votes'}/>
      <Votes number={bigest} />
    </div>
  );
};

export default App;
