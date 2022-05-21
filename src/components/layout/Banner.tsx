import { styled } from 'linaria/react'
import { View } from '@tarojs/components'

import type { FC } from 'react'

import { theme } from '../../config'

export const Banner: FC<unknown> = () => {
  return <BannerUI />
}

const BannerUI = styled(View)<unknown>`
  height: 6rem;
  background-color: ${theme.primary};
`

export default Banner
