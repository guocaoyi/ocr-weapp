import { Component } from 'react'
import Taro from '@tarojs/taro'
import { Button, View } from '@tarojs/components'

import config from '../../config'

import './index.less'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number
      increment: Function
      decrement: Function
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps
}

class Index extends Component {
  /**
   * 从本地手机中获取图片（相册或者相机拍照）
   */
  getFromMobile = () => {
    Taro.chooseImage({
      count: 1,
      complete: (res: TaroGeneral.CallbackResult) => {},
      fail: (res: TaroGeneral.CallbackResult) => {},
      success: (result) => {
        console.info(result.tempFilePaths)
        console.info(result.tempFiles)
      },
    })
  }

  /**
   * 从会话中获取图片
   */
  getFromSession = () => {
    Taro.chooseMessageFile({
      count: 1,
      complete: (res: TaroGeneral.CallbackResult) => {},
      fail: (res: TaroGeneral.CallbackResult) => {},
      success: (result) => {
        console.info(result.tempFiles)
      },
    })
  }

  getLocalImage = async () => {
    Taro.cloud
      .callFunction({
        name: 'getUnlimit',
        data: {
          scene: 'xxx',
          pages: 'pages/index/index',
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch(() => {
        console.log('error')
      })
  }

  render() {
    return (
      <View style={{ height: '100%', width: '100%', display: 'flow' }}>
        <Button onClick={this.getFromMobile}>本地照片</Button>
        <Button onClick={this.getFromSession}>微信聊天会话</Button>
        <Button onClick={this.getFromSession}>微信聊天会话</Button>
        <Button onClick={this.getFromSession}>微信聊天会话</Button>
        <Button onClick={this.getFromSession}>微信聊天会话</Button>
        <Button onClick={this.getFromSession}>微信聊天会话</Button>
      </View>
    )
  }
}

export default Index
