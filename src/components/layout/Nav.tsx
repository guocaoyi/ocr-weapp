import { Component, PropsWithChildren } from 'react'
import { Navigator, View } from '@tarojs/components'

import './Nav.less'

interface PageStateProps extends PropsWithChildren<any> {}

interface Nav {
  props: PageStateProps
}

class Nav extends Component {
  render() {
    return (
      <Navigator>
        <View className='nav'>xxx</View>
      </Navigator>
    )
  }
}

export default Nav
