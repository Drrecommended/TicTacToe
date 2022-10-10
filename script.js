//IIFE for the game itself
(function () {
    "use strict";
    //module for the game board
    const gameBoardModule = (() => {
      const gameBoard = document.getElementById("game-board");
  
      const board = [
        ["x", "", ""],
        ["", "", ""],
        ["", "", "o"],
      ];
  
      //create the board
      const renderBoard = () => {
        for (let i = 0; i < board.length; i++) {
          for (let k = 0; k < board[i].length; k++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.innerText = board[i][k];
            console.log(board[i][k])
            gameBoard.appendChild(square);
          }
        }
        //attach the event handlers
        const squares = document.querySelectorAll(".square");
        for (let i = 0; i < squares.length; i++) {
          (() => {
            squares[i].dataset.dataIndex = i;
            squares[i].addEventListener(
              "click",
              controller.clickHandler.bind(squares[i])
            );
          })();
        }
      };
  
      return { board, renderBoard };
    })();
  
    //module for the controller
    const controller = (() => {
      const resetBtn = document.getElementById("reset-btn");
      const gameOver = false;
      let moves = 1; 
      let currentPlayer = 1;
  
      function clickHandler() {
        if (this.innerText != "x" && this.innerText != "o") {
          if (currentPlayer === 2) {
            this.innerText = "o";
            currentPlayer = 1;
          } else if (currentPlayer === 1) {
            this.innerText = "x";
            currentPlayer = 2;
            
          }
          moves++
          checkforWin()
        }
      }
      function checkforWin () {
        
      }
   
      const reset = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
          square.innerText = "";
        });
      };
  
      resetBtn.addEventListener("click", reset);
  
      return { gameOver, clickHandler };
    })();
  
    const Player = (name, score) => {
      const getName = () => name;
      const getScore = () => score;
  
      const makeMove = (t) => console.log("yeee", t);
  
      return { getName, getScore, makeMove };
    };
  
    const player1 = Player("Tyler", "2", "x");
    const player2 = Player("Craig", "2", "o");
    gameBoardModule.renderBoard(gameBoardModule.board);
  })();
  