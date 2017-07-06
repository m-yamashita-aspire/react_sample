import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoge: { key: "hogehoge", value: "fugafuga" }
    }
  }

  render () {
    return <p> Hello React! {this.state.hoge.key}</p>
  }
}

render(<App/>, document.getElementById('app'))