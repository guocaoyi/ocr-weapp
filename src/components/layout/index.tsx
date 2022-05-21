import Taro from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import { styled } from 'linaria/react'

import type { FC } from 'react'

import logo from '../../assets/image/logo.png'
import { theme } from '../../config'

/**
 * 通用整体布局
 */
export const Layout: FC<{ className?: string }> = (props) => {
  /** to help page */
  const handleNavToHelp = () =>
    Taro.navigateTo({
      url: '/pages/help/index',
    })

  return (
    <ContainerWrap>
      <NavWrap>
        <LogoWrap onClick={handleNavToHelp}>
          <LogoImage src={logo} />
        </LogoWrap>
      </NavWrap>
      <ContentWrap>{props.children}</ContentWrap>
    </ContainerWrap>
  )
}

const ContainerWrap = styled(View)<unknown>`
  flex: 1;
  flex-direction: column;
  display: flex;
`

export const NavWrap = styled(View)<unknown>`
  height: 6rem;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: column-reverse;
`

const LogoWrap = styled(View)`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 1.3rem;
  background-color: #ffffff;
  margin-left: 1rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoImage = styled(Image)`
  width: 2rem;
  height: 2rem;
`

const ContentWrap = styled(View)<unknown>`
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: ${theme.bg};
`

export default Layout
export * from './Banner'
