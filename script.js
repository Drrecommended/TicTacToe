//IIFE for the game itself
(function () {
    "use strict";
    //module for the game board
    const gameBoard = (() => {
      const squares = document.querySelectorAll(".game-board > .square");
  
      const board = [
        ["1", "2", "3"],
        ["x", "5", "o"],
        ["7", "8", "9"],
      ];
  
      for (let i = 0; i < squares.length; i++) {
        (() => {
          squares[i].addEventListener("click", function () {
            let square = this;
            applyChoice(square);
          });
        })();
      }
  
      const applyChoice = (t) => {
        console.log(t);
        t.textContent = "x";
      };
  
      return { board, squares };
    })();
  
    //module for the controller
    const controller = (() => {
      const resetBtn = document.getElementById('reset-btn')
      const gameOver = false;
      const player1Score = 2;
      const player2Score = 2;
  
      const resetBoard = () => {
          console.log('test')
      }
  
      resetBtn.addEventListener('click', resetBoard)
  
      return { gameOver };
    })();
  })();
  