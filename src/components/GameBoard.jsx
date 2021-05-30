import { Component } from 'react'

export class GameBoard extends Component {
  state = {
    row: null,
    col: null,
  }

  handleCellLeftClick = (row, column, cell) => {
    this.props.recordCheck(row, column, cell)
    this.state.row = row
    this.state.col = column
  }
  handleCellRightClick = (row, column) => {
    this.props.recordFlag(row, column)
  }
  handleCell = (rowIdx, columnIdx, cell) => {
    if (cell === 'F' || cell === '@') {
      return 'cell flag'
    } else if (
      cell === '*' &&
      this.state.row == rowIdx &&
      this.state.col == columnIdx
    ) {
      return 'cell loss'
    } else if (cell === '*') {
      return 'cell bomb'
    } else if (cell === '_') {
      return 'cell empty'
    } else if (
      cell == '1' ||
      cell == '2' ||
      cell == '3' ||
      cell == '4' ||
      cell == '5' ||
      cell == '6' ||
      cell == '7' ||
      cell == '8'
    ) {
      return 'cell number'
    } else {
      return 'cell'
    }
  }

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
                      className={this.handleCell(rowIdx, columnIdx, cell)}
                      onClick={() =>
                        this.handleCellLeftClick(rowIdx, columnIdx, cell)
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
