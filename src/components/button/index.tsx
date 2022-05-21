import { View } from '@tarojs/components'
import { styled } from 'linaria/react'

import type { FC } from 'react'

/**
 * 重写 @tarojs/component Button 样式
 */
export const Button: FC<unknown> = () => {
  return <Container></Container>
}

const Container = styled(View)`
  padding: 0%;
`

export default Button
