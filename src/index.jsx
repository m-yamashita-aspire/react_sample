import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoge: { 
        key: "hogehoge", 
        value: "fugafuga" 
      },
      fuga: {
        attr: true
      },
      users: [
        {id: 1, name: "yamashita"},
        {id: 2, name: "doyao"},
      ]
    }
  }

  buttonClick() {
    this.setState({ hoge: { key: "change!!!" } })
  }

  componentDidMount() {
    // 配置された時一回だけ動く
  }

  render () {
    return (
      <div>
        <p> 
          Hello React! {this.state.hoge.key} {this.props.propAttr}
        </p>
        <button onClick={this.buttonClick.bind(this)}>change!</button>
        <div>
          {
            // key属性を指定しないとエラーになる
            this.state.users.map((user) => {
              return <UserCard key={user.id} user={user} />
          })}
        </div>
      </div>
    )
  }
}

class UserCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }
  render() {
    return (
      <div>
        <p>id: {this.state.user.id}</p>
        <p>name: {this.state.user.name}</p>
      </div>
    )
  }
}

render(<App propAttr="shigashige"/>, document.getElementById('app'))