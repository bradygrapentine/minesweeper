import React, { Component } from 'react'

export class App extends Component {
  state = {
    id: 1,
    board: [
      ['X', ' ', ' ', 'X', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' X', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'X'],
    ],
    state: 'new',
    mines: 10,
  }
  render() {
    return (
      <>
        <main>
          <h3>Sweeping for Mines!</h3>
          <ul>
            <li>
              <article>Count: Test</article>
            </li>
            <li>
              <button>Play Again</button>
            </li>
          </ul>
          <div className="boardUI">
            {' '}
            {this.state.board.map((row, rowIdx) => {
              return (
                <div className="row">
                  {row.map((cell, columnIdx) => {
                    return <button className="cell">{cell}</button>
                  })}
                </div>
              )
            })}
          </div>
        </main>
      </>
    )
  }
}
