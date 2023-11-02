import './App.css';
import { useState } from 'react';

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const choices = ["rock", "paper", "scissors"];

  const handleClick = value => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  return (
    <div>
      <h1>User choice is: {userChoice}</h1>
      <h1>Computer choice is: {computerChoice}</h1>
      {choices.map((choice, index) => <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
    </div>
  );
}

export default App;
