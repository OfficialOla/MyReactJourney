import React, { useState} from "react"
import '../styles/TicTacToe.css'
function TicTacToe(){
        const [boxes, setBoxes] = useState(Array(9).fill(null));
        const [currentPlayer, setCurrentPlayer] = useState('X');
        const [winner, setWinner] = useState("");

      
        function handleClick(index){
            if (!winner && !boxes[index]) {
                const newBoxes = [...boxes];
                newBoxes[index] = currentPlayer;
                setBoxes(newBoxes);
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
              }
            };
            
        function rowCol(index) {
          return (
            <div className="box" onClick={() => handleClick(index)}>
              {boxes[index]}
            </div>
          );
        };
        
        function resetGame() {
            setBoxes(Array(9).fill(null));
            setCurrentPlayer('X');
            setWinner(null);
          };
      
        return (
          <div className="Tictactoe">
            <div className="welcome"><h1>Welcome to the ultimate ❌ and ⭕ game 😎</h1></div>
            <div className="game-board">
              {rowCol(0)}
              {rowCol(1)}
              {rowCol(2)}
              {rowCol(3)}
              {rowCol(4)}
              {rowCol(5)}
              {rowCol(6)}
              {rowCol(7)}
              {rowCol(8)}
            </div><br />
            <button className="resetButton" onClick={resetGame}>Play Again</button>
            <p className="currentPlayer">Current Player: {currentPlayer}</p>
          </div>
        );
      }
      
      export default TicTacToe;