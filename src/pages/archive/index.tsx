import React, { PropsWithChildren } from 'react'
import VirtualList from '@tarojs/components/virtual-list'
import { View } from '@tarojs/components'

import { Layout } from '../../components/layout'

interface Props extends PropsWithChildren<any> {}
interface State {
  data: number[]
}

/**
 * 归档
 */
export class Archive extends React.Component<Props, State> {
  state = {
    data: new Array(100).fill(0).map((_, i) => i + 0),
  }

  /**
   * 更新最新的数据
   */
  onScrollToUpper = () => {
    console.log('onScrollToUpper')
  }

  /**
   * 下一页（默认请求50条数据）
   */
  onScrollToLower = () => {
    console.log('onScrollToLower')
  }

  render() {
    const { data } = this.state
    const dataLen = data.length

    const Row = React.memo<any>(({ id, index, style }) => {
      return (
        <View
          id={id}
          className={index % 2 ? 'ListItemOdd' : 'ListItemEven'}
          style={style}
        >
          Row {index}
        </View>
      )
    })

    return (
      <Layout>
        <VirtualList
          height={500}
          width='100%'
          itemData={data}
          itemCount={dataLen}
          itemSize={100}
        >
          {Row}
        </VirtualList>
      </Layout>
    )
  }
}

export default Archive
