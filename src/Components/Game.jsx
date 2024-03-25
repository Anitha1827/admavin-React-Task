import React, { useEffect, useState } from "react";
import "./Game.css";

const Game = () => {
  const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [score, setScore] = useState(0);
  const [gamefinished, setGameFinished] = useState(false);
  const [restart, setRestart] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  let [timer, setTimer] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 9) + 1;
      setRandomNumber(newRandomNumber);
      let temp = --timer;
      setTimer(temp);
      console.log(timer);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setGameFinished(true);
    }, 60000);

    return () => clearInterval(interval);
  }, [restart]);

  return (
    <div className="Game">
      <h1>
        Problem 4 - Game (Points will be awarded if clicked on the right box)
      </h1>
      <h1>Timer: {timer}</h1>
      <div className="Gamebox">
        {boxes.map((item, idx) => (
          <Box
            key={idx}
            item={item}
            randomNumber={randomNumber}
            score={score}
            setScore={setScore}
            gamefinished={gamefinished}
          />
        ))}
      </div>
      <p>Score: {score}</p>
      <button
        onClick={() => {
          setRestart(!restart);
          setGameFinished(false);
          setTimer(60);
          setScore(0);
        }}
      >
        Restart
      </button>
    </div>
  );
};

const Box = ({ item, randomNumber, score, setScore, gamefinished }) => {
  const calculateScore = () => {
    if (!gamefinished) {
      if (item === randomNumber) {
        setScore(score + 5);
      } else {
        setScore(score - 2.5);
      }
    }
  };
  return (
    <div className="box" onClick={calculateScore}>
      {item === randomNumber && <p>HIT</p>}
    </div>
  );
};

export default Game;
