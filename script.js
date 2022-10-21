//IIFE for the game itself
;(function () {
  'use strict'

  function Player(name, score, sign) {
    const getName = () => name
    const getScore = () => score
    const getSign = () => sign

    const makeMove = (g, arr) => {
      const playerSign = getSign()
      let index
      for (let i = 0; i < gameBoard.board.length; i++) {
        if (i === g) {
          gameBoard.board[i] = playerSign
          index = i
        }
      }
      gameBoard.renderMove(index, playerSign)
    }

    return { getName, getScore, getSign, makeMove }
  }

  //module for the game board
  const gameBoard = (() => {
    const squares = document.querySelectorAll('.square')
    // const player = controller.currentPlayer
    const board = new Array(9)

    const renderMove = (index, sign) => {
      squares.forEach((square) => {
        console.log(index)
        if (+square.dataset.index === index) {
          square.innerText = sign
        }
      })
      controller.checkForWin()
    }

    return { board, squares, renderMove }
  })()

  // module for the controller
  const controller = (() => {
    const resetBtn = document.getElementById('reset-btn')
    const player1 = Player('Tyler', '2', 'x')
    const player2 = Player('Craig', '2', 'o')
    const gameOver = false
    let currentPlayer = player1
    let squares = gameBoard.squares

    const reset = () => {
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
