import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import './index.less'

interface Props {}

/**
 * help
 */
export class Help extends Component<Props> {
  render() {
    return (
      <View className='index'>
        <Text>1: xxx</Text>
        <Text>2: xxxx</Text>
        <Text>3: xxxxxx</Text>
      </View>
    )
  }
}

export default Help
