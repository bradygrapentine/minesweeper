import React, { Component } from 'react'
import { GameBoard } from './components/GameBoard'

export class App extends Component {
  state = {
    id: 1,
    board: [
      ['', ' ', ' ', '', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
    ],
    state: 'new',
    mines: 10,
  }

  recordCheck = async (row, column) => {
    const body = { row: row, col: column }
    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )
    if (response.status === 200) {
      // Get the response as JSON
      const game = await response.json()
      // Make that the new state!
      this.setState(game)
    }
  }

  recordFlag = async (row, column) => {
    const body = { row: row, col: column }
    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
      }
    )
    if (response.status === 200) {
      // Get the response as JSON
      const game = await response.json()
      // Make that the new state!
      this.setState(game)
    }
  }

  handleNewGame = async () => {
    // Make a POST request to ask for a new game
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )
    if (response.status === 200) {
      // Get the response as JSON
      const game = await response.json()
      console.log(game)
      // Make that the new state!
      this.setState(game)
    }
  }
  componentDidMount() {
    this.handleNewGame()
  }

  render() {
    return (
      <>
        <main>
          <h3>Sweeping for Mines!</h3>
          <ul>
            <li>
              <article>Count: {this.state.mines} </article>
            </li>
            <li>
              <button
                className="playAgain"
                onClick={() => this.handleNewGame()}
              >
                Play Again
              </button>
            </li>
          </ul>
          <GameBoard
            board={this.state.board}
            recordCheck={this.recordCheck}
            recordFlag={this.recordFlag}
          />
        </main>
      </>
    )
  }
}
