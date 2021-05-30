import { Component } from 'react'

export class GameBoard extends Component {
  handleCellLeftClick = (row, column) => {
    this.props.recordCheck(row, column)
  }
  handleCellRightClick = (row, column) => {
    this.props.recordFlag(row, column)
  }
  // handleCell = cell => {
  //   if (cell === 'F') {
  //     cell = '🚩'
  //   } else if (cell === '*') {
  //     cell = '💥'
  //   }
  // }

  render() {
    return (
      <div className="boardUI">
        {' '}
        {this.props.board.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className="row">
              {row.map((cell, columnIdx) => {
                return (
                  <article
                    className="onSelect"
                    onContextMenu={event => event.preventDefault()}
                  >
                    {' '}
                    <button
                      key={columnIdx} // unique (in its domain) because the only element in the row with that particular columnIdx
                      className="cell"
                      onClick={() =>
                        this.handleCellLeftClick(rowIdx, columnIdx)
                      }
                      onContextMenu={() =>
                        this.handleCellRightClick(rowIdx, columnIdx)
                      }
                      // onContextMenu={event => event.preventDefault()}
                    >
                      {cell}
                    </button>
                  </article>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
export default GameBoard
