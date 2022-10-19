//IIFE for the game itself
;(function () {
  'use strict'

  function Player(name, score, sign) {
    const getName = () => name
    const getScore = () => score
    const getSign = () => sign

    const makeMove = (g, arr) => {
      gameBoard.render(g, arr, getName)
    }

    return { getName, getScore, getSign, makeMove }
  }

  //module for the game board
  const gameBoard = (() => {
    const squares = document.querySelectorAll('.square')
    // const player = controller.currentPlayer
    const board = [
      ['x', '', ''],
      ['', '', ''],
      ['', '', 'o'],
    ]

    const render = (g, arr, getName) => {
      console.log(g, arr, getName())
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {

        }
      }
    }
    //function for rendering move
    // const makeMove = (g, arr) => {
    //   for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board.length; j++) {
    //       console.log(board[i][j], g, arr[g], arr[g].dataset.index)
    //     }
    //   }
    // }

    //   makeMove.bind(this, index, arr)
    //active player rendermove add render move to bind

    return { board, squares, render }
  })()

  // module for the controller
  const controller = (() => {
    const resetBtn = document.getElementById('reset-btn')
    const player1 = Player('Tyler', '2', 'x')
    const player2 = Player('Craig', '2', 'o')
    const gameOver = false
    let currentPlayer = player1
    let squares = gameBoard.squares

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

    // function for rendering move
    // const makeMove = (g, arr) => {
    //   let board = gameBoard.board
    //   for (let i = 0; i < board.length; i++) {
    //     for (let j = 0; j < board.length; j++) {
    //       console.log(board[i][j], g, arr[g], arr[g].dataset.index)
    //     }
    //   }
    // }

    const reset = () => {
      const squares = document.querySelectorAll('.square')
      squares.forEach((square) => {
        square.innerText = ''
      })
    }

    resetBtn.addEventListener('click', reset)

    squares.forEach((sqaure, index, arr) => {
      sqaure.addEventListener(
        'click',
        currentPlayer.makeMove.bind(this, index, arr)
      )
    })

    return { gameOver, currentPlayer }
  })()
})()
