import React from 'react';
import PureComponent from 'react-pure-render/component'
import { partial } from 'lodash'
import { Link } from 'react-router'

export default class ChangeBoardFooter extends PureComponent {
  render() {
    const { currentBoard, saveBoard, resetColors } = this.props
    const saveCurrentBoard = partial(saveBoard, currentBoard)

    return (
      <div>
        <div className="controls">
          <button className="green" onClick={saveCurrentBoard}>Save Board</button>
          <button className="red" onClick={resetColors}>Reset Colors</button>
        </div>
        <Link to="/">
          <button className="light">Back to gallery</button>
        </Link>
      </div>
    )
  }
}
