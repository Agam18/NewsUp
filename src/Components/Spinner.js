import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className="text-center container my-3 mx-2">
        <img src={loading} alt="loading"></img>
      </div>
    )
  }
}

export default Spinner
