import React from 'react';
import PureComponent from 'react-pure-render/component'
import Board from './Board'
import { Link } from 'react-router'
import { partial } from 'lodash'

import '../styles/Gallery.scss'

export default class Gallery extends PureComponent {
  static propTypes = {
    allBoards: React.PropTypes.array
  }

  renderBoardThumbnail(board, i) {
    const chooseBoard = partial(this.props.chooseBoard, board)

    return (
      <div className="thumbnail" key={`thumbnail-${i}`} onClick={chooseBoard}>
        <Board board={board} />
      </div>
    )
  }

  render() {
    const boards = this.props.allBoards.map(::this.renderBoardThumbnail)

    return (
      <div>
        <h1>Choose <span className="bold">Existing</span></h1>
        <div className="gallery">{boards}</div>
      </div>
    )
  }
}
