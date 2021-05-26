import { Component } from 'react'

export class GameBoard extends Component {
  handleCellLeftClick = (row, column) => {
    this.props.recordCheck(row, column)
  }
  handleCellRightClick = (row, column) => {
    this.props.recordFlag(row, column)
  }
  render() {
    return (
      <div className="boardUI">
        {' '}
        {this.props.board.map((row, rowIdx) => {
          return (
            <div onContextMenu={e => e.preventDefault()} className="row">
              {row.map((cell, columnIdx) => {
                return (
                  <button
                    className="cell"
                    onClick={() => this.handleCellLeftClick(rowIdx, columnIdx)}
                    onContextMenu={() =>
                      this.handleCellRightClick(rowIdx, columnIdx)
                    }
                  >
                    {cell}
                  </button>
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
