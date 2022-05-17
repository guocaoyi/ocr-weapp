import Taro from '@tarojs/taro'
import { Component } from 'react'

/**
 * App
 */
class App extends Component {
  componentDidMount() {
    Taro?.cloud?.init?.({
      env: 'test-0gkc9qyxe8fbe98a', // test
      traceUser: true,
    })
  }

  componentDidCatchError() {
    //
  }

  // this.props.children 就是要渲染的页面
  render() {
    return <>{this.props.children}</>
  }
}

export default App
