import Taro from '@tarojs/taro'
import { Component } from 'react'

import './app.less'

/**
 * Taro App
 */
class App extends Component {
  componentDidMount() {
    Taro?.cloud?.init?.({
      env: 'test-0gkc9qyxe8fbe98a', // cloud env
      traceUser: true,
    })
  }

  componentDidCatchError() {}

  render() {
    return <>{this.props.children}</>
  }
}

export default App
