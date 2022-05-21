import Taro from '@tarojs/taro'
import { Button } from '@tarojs/components'
import { styled } from 'linaria/react'

import type { FC } from 'react'

import { Layout, Banner } from '../../components/layout'

/**
 * 特殊场景（银行卡、营业执照、驾驶证、身份证、行驶证）
 */
export const Scene: FC<unknown> = (props) => {
  return (
    <Layout>
      <Banner />
      <>
        <Item
          onClick={() => {
            Taro.navigateTo({ url: '/pages/detail/index' })
          }}
        >
          银行卡
        </Item>
        <Item>营业执照</Item>
        <Item>驾驶证</Item>
        <Item>身份证</Item>
        <Item>行驶证</Item>
      </>
    </Layout>
  )
}

const Item = styled(Button)`
  width: 48%;
`

export default Scene
