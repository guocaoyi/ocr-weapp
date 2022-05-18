import React from 'react'
import { View, ScrollView } from '@tarojs/components'

import './index.less'

interface Props {}
interface State {
  books: string
}

/**
 * 归档
 */
export class Archive extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      books: '',
    }
  }
  componentWillMount() {}

  // 从本地缓存中获取数据
  componentDidMount() {
    // console.info('call function')
    // Taro.cloud
    //   .callFunction({
    //     name: 'get-book-list',
    //     data: {
    //       $url: 'login',
    //     },
    //   })
    //   .then((res: any) => {
    //     console.log('res>>>>', res)
    //     this.setState({
    //       books: JSON.stringify(res?.result ?? {}),
    //     })
    //   })
  }

  // 在页面中使用 Taro.setNavigationBarTitle 支持传入 React Component
  componentWillUnmount() {}

  // Page on show
  componentDidShow() {}

  //
  componentDidHide() {}

  onScrollToUpper() {}

  // or 使用箭头函数
  // onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail)
  }

  render() {
    const scrollTop = 0
    const Threshold = 20

    return (
      <ScrollView
        scrollX={false}
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        style={{ height: 150 }}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
        onScroll={this.onScroll}
      >
        <View
          style={{
            height: '150px',
            backgroundColor: 'rgb(26, 173, 25)',
          }}
        >
          {this.state.books ?? 'xxxx'}
        </View>
        <View
          style={{
            height: '150px',
            backgroundColor: 'rgb(39,130,215)',
          }}
        >
          B
        </View>
        <View
          style={{
            height: '150px',
            backgroundColor: 'rgb(241,241,241)',
            color: '#333',
          }}
        >
          C
        </View>
      </ScrollView>
    )
  }
}

export default Archive
