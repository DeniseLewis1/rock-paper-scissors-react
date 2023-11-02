import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const choices = ["rock", "paper", "scissors"];

  const handleClick = value => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    switch(userChoice + computerChoice) {
      case "rockpaper":
      case "paperscissors":
      case "scissorsrock":
        setResult("You lose!");
        break;
      case "paperrock":
      case "scissorspaper":
      case "rockscissors":
        setResult("You win!");
         break;
      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("It's a draw!");
        break;
    };
  }, [computerChoice, userChoice]);

  return (
    <div>
      <h1>User choice is: {userChoice}</h1>
      <h1>Computer choice is: {computerChoice}</h1>
      {choices.map((choice, index) => <button key={index} onClick={() => handleClick(choice)}>{choice}</button>)}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
