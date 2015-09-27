import React from 'react';
import PureComponent from 'react-pure-render/component'
import { all, values } from 'lodash'

import '../styles/NewBoard.scss'

export default class NewBoard extends PureComponent {
  static propTypes = { onSubmit: React.PropTypes.func.isRequired }

  state = {
    numRows: 5,
    numCols: 5
  }

  validDimensions() {
    return all(values(this.state))
  }

  submit() {
    const { numRows, numCols } = this.state
    if (this.validDimensions()) {
      this.props.onSubmit(numRows, numCols)
    }
  }

  onChange(e) {
    const { id, value } = e.target
    if (+value >= 0) this.setState({ [id]: +value })
  }

  render() {
    return (
      <div className="new-board">
        <h1>New <span className="bold">Board</span></h1>
        <label htmlFor="numRows">
          <h2>Rows</h2>
          <input id="numRows" value={this.state.numRows} onChange={::this.onChange} type="number"/>
        </label>
        <label htmlFor="numCols">
          <h2>Columns</h2>
          <input id="numCols" value={this.state.numCols} onChange={::this.onChange} type="number"/>
        </label>
        <button className="green" onClick={::this.submit}>Create</button>
      </div>
    )
  }
}

// integration/happy path tests
// unit test

// fuzz testing (property testing)
// event sourcing
