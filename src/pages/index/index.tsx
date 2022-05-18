import { Component } from 'react'
import { View } from '@tarojs/components'

import Container from '../../components/layout/Container'

import './index.less'

type PageStateProps = {}

interface Index {
  props: PageStateProps
}

class Index extends Component {
  render() {
    return (
      <Container>
        <>
          <View className='item'>银行卡</View>
          <View className='item'>营业执照</View>
          <View className='item'>驾驶证</View>
          <View className='item'>身份证</View>
          <View className='item'>通用印刷体</View>
          <View className='item'>行驶证</View>
        </>
      </Container>
    )
  }
}

export default Index
