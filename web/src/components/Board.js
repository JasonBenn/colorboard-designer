import React, { Component } from 'react';
import PureComponent from 'react-pure-render/component'
import { partial } from 'lodash'
import { upTo } from '../utils'

import '../styles/Board.scss'

const { func, number, objectOf, shape, string } = React.PropTypes

export default class Board extends Component {

  static propTypes = {
    board: shape({
      numRows: number.isRequired,
      numCols: number.isRequired,
      colored: objectOf(string)
    }),
    toggleColor: func
  }

  render() {
    const { numRows, colored } = this.props.board
    const rows = upTo(numRows).map(::this.renderRow)

    return (
      <div>
        <div className="board">
          {rows}
        </div>
      </div>
    )
  }

  renderRow(rowNum) {
    const { numCols } = this.props.board
    const cells = upTo(numCols).map(colNum => this.renderCell(rowNum, colNum))

    return (
      <div className="row" key={`row-${rowNum}`}>
        {cells}
      </div>
    )
  }

  renderCell(rowNum, colNum) {
    const coord = [rowNum, colNum].join(',')
    const bgColor = this.props.board.colored[coord] || 'white'
    let toggleColor
    if (this.props.toggleColor) toggleColor = partial(::this.props.toggleColor, rowNum, colNum)

    return (
      <div
        onClick={toggleColor}
        style={{backgroundColor: bgColor}}
        className="cell"
        key={`col-${colNum}`}
      />
    )
  }
}
