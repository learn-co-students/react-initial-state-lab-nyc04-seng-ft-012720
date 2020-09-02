import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        console.log('props', this.props)
        this.state = {
            secondsLeft: props.initialCount
        }
      }

  render() {
    console.log('props', this.props)
    return (
        <div>
        {(this.state.secondsLeft == 0) ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
        </div>
    )
  }
}
