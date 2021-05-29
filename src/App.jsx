import React, { Component } from 'react'
import { GameBoard } from './components/GameBoard'

export class Count extends Component {
  render() {
    if (this.props.state == 'won') {
      return <article className="noSelect">You won!</article>
    } else if (this.props.state == 'lost') {
      return <article className="noSelect">You lost!</article>
    } else {
      return (
        <article className="noSelect">
          Hidden Mines: {this.props.mines}{' '}
        </article>
      )
    }
  }
}

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

  setToEasy = async () => {
    // Make a POST request to ask for a new game
    const body = { difficulty: 0 }
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
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

  setToMedium = async () => {
    // Make a POST request to ask for a new game
    const body = { difficulty: 1 }
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
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

  setToHard = async () => {
    // Make a POST request to ask for a new game
    const body = { difficulty: 2 }
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body),
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
        <div className="dropdown">
          <span>Select Difficulty</span>
          <div className="dropdown-content">
            <p onClick={() => this.setToEasy()}>Easy</p>
            <p onClick={() => this.setToMedium()}>Medium</p>
            <p onClick={() => this.setToHard()}>Hard</p>
          </div>
        </div>
        <main>
          <h3 className="noSelect">Sweeping for Mines!</h3>

          <ul>
            <li>
              <Count
                className="noSelect"
                state={this.state.state}
                mines={this.state.mines}
              />
            </li>
            <li>
              <button
                className="playAgain noSelect"
                onClick={() => this.handleNewGame()}
              >
                <strong className="noSelect">Play Again</strong>
              </button>
            </li>
          </ul>
          <GameBoard
            className="noSelect"
            board={this.state.board}
            recordCheck={this.recordCheck}
            recordFlag={this.recordFlag}
          />
        </main>
      </>
    )
  }
}
