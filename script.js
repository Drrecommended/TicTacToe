//IIFE for the game itself
(function () {
    "use strict";
  
    //module for the game board
    const gameBoard = (() => {
      const squares = document.querySelectorAll(".square");
      const board = [
        ["x", "", ""],
        ["", "", ""],
        ["", "", "o"],
      ];
  
  
  
      //function for rendering move
      const renderMove = (g) => {
        for(let i = 0; i < board.length; i++) {
          for(let j = 0; j < board.length; j++) {
            console.log(board[i][j])
          }
        }
        // console.log('hey', g)
      };
  
      squares.forEach((sqaure, index) => {
        sqaure.addEventListener("click", renderMove.bind(this, index));
      });
  
      return { renderMove };
    })();
  
    //module for the controller
    // const controller = (() => {
    //   const resetBtn = document.getElementById("reset-btn");
    //   const gameOver = false;
    //   let currentPlayer = 1;
  
    //   const clickHandler = () => {
    //     if (this.innerText != "x" && this.innerText != "o") {
    //       if (currentPlayer === 2) {
    //         this.innerText = "o";
    //         currentPlayer = 1;
    //       } else if (currentPlayer === 1) {
    //         this.innerText = "x";
    //         currentPlayer = 2;
  
    //       }
    //       moves++
    //       checkforWin()
    //     }
    //   }
  
    //   const reset = () => {
    //     const squares = document.querySelectorAll(".square");
    //     squares.forEach((square) => {
    //       square.innerText = "";
    //     });
    //   };
  
    //   resetBtn.addEventListener("click", reset);
  
    //   return { gameOver, currentPlayer, clickHandler };
    // })();
  
    const Player = (name, score, sign) => {
      const getName = () => name;
      const getScore = () => score;
      const getSign = () => sign;
  
      return { getName, getScore, getSign };
    };
  
    const player1 = Player("Tyler", "2", "x");
    const player2 = Player("Craig", "2", "o");
  })();
  