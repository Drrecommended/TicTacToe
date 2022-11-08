const player = (name, score, sign) => {
  const makeMove = (square, index) => {
    if (square.innerText != "") {
      return;
    }
    gameBoard.render(index, sign);
  };

  return { name, score, sign, makeMove };
};

const gameBoard = (() => {
  const squares = document.querySelectorAll(".square");
  const boardMoves = new Array(9);

  function render(index, sign) {
    changeColor(index, sign);
    boardMoves[index] = sign;
    squares[index].innerText = boardMoves[index];
    controller.moves++;
    console.log(controller.moves);
    if (controller.checkForWin(sign)) {
      controller.gameOver(sign);
      return;
    } else if (controller.moves === 9) {
      controller.gameOver();
    }
    controller.changePlayer();
  }

  function changeColor(index, sign) {
    if (sign === "x") {
      squares[index].setAttribute("style", "color: blue");
    } else {
      squares[index].setAttribute("style", "color: red");
    }
  }

  return { boardMoves, squares, render };
})();

const controller = (() => {
  const resetBtn = document.getElementById("reset-btn");
  const player1 = player("tyler", "2", "x");
  const player2 = player("craig", "5", "o");
  let currentPlayer = player1;
  let moves = 0;
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function changePlayer() {
    if (currentPlayer === player1) {
      currentPlayer = player2;
    } else if (currentPlayer === player2) {
      currentPlayer = player1;
    }
  }

  const checkForWin = (player) => {
    return WINNING_COMBINATIONS.some((winCombo) => {
      return winCombo.every((i) => gameBoard.boardMoves[i] === player);
    });
  };

  const gameOver = (sign) => {
    if (sign) {
      console.log("game over " + sign + " wins");
    } else {
      console.log("draw!");
    }
  };

  const reset = () => {
    controller.moves = 0;
    const movesMade = gameBoard.boardMoves;
    currentPlayer = player1;
    for (let i = 0; i < movesMade.length; i++) {
      movesMade[i] = "";
      gameBoard.squares[i].innerText = "";
    }
  };

  gameBoard.squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      currentPlayer.makeMove(square, index);
    });
  });

  resetBtn.addEventListener("click", () => {
    reset();
  });

  return { currentPlayer, changePlayer, checkForWin, gameOver, moves };
})();
