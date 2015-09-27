import React from 'react';
import PureComponent from 'react-pure-render/component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { newBoard, chooseBoard, fetchAllBoards } from '../redux/actions'
import NewBoard from './NewBoard'
import Gallery from './Gallery'

@connect(
  state => ({ allBoards: state.allBoards }),
  dispatch => bindActionCreators({ newBoard, chooseBoard, fetchAllBoards }, dispatch)
)
export default class ChooseBoard extends PureComponent {
  componentDidMount() {
    this.props.fetchAllBoards()
  }

  render() {
    const { newBoard, chooseBoard, allBoards } = this.props
    return (
      <div>
        <NewBoard onSubmit={newBoard} />
        <Gallery chooseBoard={chooseBoard} allBoards={allBoards} />
      </div>
    )
  }
}
