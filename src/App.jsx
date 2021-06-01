import React, { Component } from 'react'
import { GameBoard } from './components/GameBoard'
import ls from 'local-storage'

export class Count extends Component {
  render() {
    if (this.props.state == 'won') {
      return <article className="info noSelect">You won!</article>
    } else if (this.props.state == 'lost') {
      return <article className="info noSelect">You lost!</article>
    } else {
      return (
        <article className="info noSelect">
          <strong>Hidden Mines: {this.props.mines}</strong>
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

  recordCheck = async (row, column, cell) => {
    // const body = { row: row, col: column }
    if (cell == 'F') {
      window.alert('Must remove flag before checking for mine')
      return
    }
    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check?row=${row}&col=${column}`,
      // `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
      {
        method: 'POST',
        // headers: { 'content-type': 'application/json' },
        // body: JSON.stringify(body),
      }
    )
    if (response.status === 200) {
      // Get the response as JSON
      const game = await response.json()
      // Make that the new state!
      this.setState(game)
      window.localStorage.setItem('game', JSON.stringify(this.state))
    }
  }

  recordFlag = async (row, column) => {
    // const body = { row: row, col: column }
    const response = await fetch(
      `https://minesweeper-api.herokuapp.com/games/${this.state.id}/flag?row=${row}&col=${column}`,
      {
        method: 'POST',
        // headers: { 'content-type': 'application/json' },
        // body: JSON.stringify(body),
      }
    )
    if (response.status === 200) {
      // Get the response as JSON
      const game = await response.json()
      // Make that the new state!
      this.setState(game)
      window.localStorage.setItem('game', JSON.stringify(this.state))
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
      window.localStorage.setItem('game', JSON.stringify(this.state))
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
      window.localStorage.setItem('game', JSON.stringify(this.state))
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
      window.localStorage.setItem('game', JSON.stringify(this.state))
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
      window.localStorage.setItem('game', JSON.stringify(this.state))
    }
  }

  componentDidMount() {
    const game = window.localStorage.getItem('game')
    if (game == null) {
      this.handleNewGame()
    } else {
      try {
        this.setState(JSON.parse(game))
      } catch {
        this.handleNewGame()
      }
    }
  }

  render() {
    return (
      <>
        <main>
          <h2 className="noSelect">
            <strong>Sweeping for Mines!</strong>
          </h2>
          <button className="dropdown">
            <span>
              <strong>Select Difficulty</strong>
            </span>
            <div className="dropdown-content">
              <p onClick={() => this.setToEasy()}>Easy</p>
              <p onClick={() => this.setToMedium()}>Medium</p>
              <p onClick={() => this.setToHard()}>Hard</p>
            </div>
          </button>
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
                <strong className="noSelect">Restart</strong>
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
