import React from 'react';
import PureComponent from 'react-pure-render/component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Board from './Board'
import { toggleColor, saveBoard, resetColors } from '../redux/actions'
import ChangeBoardFooter from './ChangeBoardFooter'


const { func, number, objectOf, shape, string } = React.PropTypes

@connect(
  state => ({ currentBoard: state.currentBoard }),
  dispatch => bindActionCreators({ toggleColor, saveBoard, resetColors }, dispatch)
)
export default class ChangeBoard extends PureComponent {
  componentShouldUpdate(newProps) {
    return this.props !== newProps
  }

  static propTypes = {
    currentBoard: shape({
      numRows: number.isRequired,
      numCols: number.isRequired,
      colored: objectOf(string)
    }),
    toggleColor: func.isRequired,
    saveBoard: func.isRequired,
    resetColors: func.isRequired,
  }

  render() {
    const { currentBoard, saveBoard, resetColors, toggleColor } = this.props

    return (
      <div>
        <h1>ColorGrid <span className="bold">Designer</span></h1>
        <Board board={currentBoard} toggleColor={toggleColor} />
        <ChangeBoardFooter {...{ currentBoard, saveBoard, resetColors }} />
      </div>
    )
  }
}
