import { Component } from 'react'
import { View } from '@tarojs/components'

import './index.less'

type PageStateProps = {}

interface Button {
  props: PageStateProps
}

class Button extends Component {
  render() {
    return <View className='container'></View>
  }
}

export default Button
