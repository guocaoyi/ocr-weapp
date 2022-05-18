import { Component } from 'react'
import { Button, View } from '@tarojs/components'

import './index.less'

type PageStateProps = {}

interface Index {
  props: PageStateProps
}

class Index extends Component {
  render() {
    return (
      <View style={{ height: '100%', width: '100%', display: 'flow' }}>
        <View style={{}}></View>

        <Button onClick={() => {}}>银行卡</Button>
        <Button onClick={() => {}}>营业执照</Button>
        <Button onClick={() => {}}>驾驶证</Button>
        <Button onClick={() => {}}>身份证</Button>
        <Button onClick={() => {}}>通用印刷体</Button>
        <Button onClick={() => {}}>行驶证</Button>
      </View>
    )
  }
}

export default Index
