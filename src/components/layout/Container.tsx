import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'

import Nav from './Nav'

import './Container.less'

interface PageStateProps extends PropsWithChildren<{}> {}

interface Container {
  props: PageStateProps
}

class Container extends Component {
  render() {
    return (
      <View className='container'>
        <Nav />
        <View className='baner'></View>
        <View className='content'>{this.props.children}</View>
      </View>
    )
  }
}

export default Container
