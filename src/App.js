import { useState, Fragment } from "react";
import "./App.css";
import Board from "./Components/Board";
import Header from "./Components/Header";
import Headings from "./Components/Headings";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playerx, setPlayerX] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [scores, setScore] = useState({ xscore: 0, oscore: 0 });
  const [winner, setWinner] = useState("");

  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const winCheck = (board) => {
    for (let i = 0; i < winPattern.length; i++) {
      const [a, b, c] = winPattern[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setGameOver(true);
        setWinner(board[a]);
        return board[a];
      }
    }
  };
  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const boardHandler = (index) => {
    const updatedBoard = board.map((value, idx) => {
      //if the index of click === index of array, we update it
      //else we keep the value already present
      if (idx === index) {
        return playerx === true ? "X" : "O";
      } else {
        return value;
      }
    });
    setPlayerX(!playerx);

    let winner = winCheck(updatedBoard);
    if (winner) {
      console.log(typeof winner, winner);
      if (winner === "O") {
        let { oscore } = scores;
        oscore += 1;
        setScore({ ...scores, oscore: oscore });
      } else {
        let { xscore } = scores;
        xscore += 1;
        setScore({ ...scores, xscore: xscore });
      }
    }
    console.log(scores);
    setBoard(updatedBoard);
  };

  const resetHandler = () => {
    setGameOver(false);
    resetBoard();
  };
  return (
    <>
      <div className="mainDiv">
        <Headings click={resetHandler} />
        <div>
          <Header turn={playerx} scores={scores} />
          <Board
            value={board}
            click={boardHandler}
            gameover={gameOver}
            winner={winner}
          />
        </div>
      </div>
    </>
  );
}

export default App;
