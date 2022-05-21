import { View, Text } from '@tarojs/components'
import { styled } from 'linaria/react'

import type { FC } from 'react'

import { theme } from '../../config'

/**
 * LabelBlock
 */
const LabelBlock: FC<{ label: string; content?: string[] }> = (props) => (
  <LabelBlockWrap>
    <TitleWrap>
      <TitlePointUI />
      <TitleUI>{props?.label ?? ''}</TitleUI>
    </TitleWrap>
    {props?.content?.map((item, index, self) => (
      <ContentUI key={index}>
        {self?.length > 1 ? index + 1 + '、' : ''}
        {item ?? ''}
      </ContentUI>
    )) ?? null}
  </LabelBlockWrap>
)

/**
 * help
 */
export const Help: FC<unknown> = () => {
  return (
    <ContainerWrap>
      <LabelBlock
        label='产品说明'
        content={[
          '本应用 OCR 的能力基于微信开发平台接口提供，超出调用次数（100 次/天）时则改用 tesseract 进行解析。代码完全开源，且由微信云开发（云函数）托管，不保留任何用户数据。',
        ]}
      />

      <LabelBlock
        label='产品能力'
        content={[
          '证件识别（身份证、银行卡、驾驶证、行驶证、营业执照）',
          '通用场景图文识别（印刷体字体识别）',
          '客户端缓存，支持主动开启云端缓存（仅保存 7 天）',
          '数据导出（cvs、xlsx、json、txt）',
        ]}
      />

      <LabelBlock label='其他' />
    </ContainerWrap>
  )
}

const ContainerWrap = styled(View)`
  padding: 1rem;
`

const LabelBlockWrap = styled(View)`
  padding-bottom: 1rem;
`

const TitleWrap = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2rem;
`

const TitlePointUI = styled(View)`
  width: 0.3rem;
  height: 1rem;
  background: ${theme.primary};
  margin-right: 0.5rem;
`

const TitleUI = styled(Text)`
  line-height: 2rem;

  font-size: 1rem;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  color: ${theme.fontColor};
`

const ContentUI = styled(Text)`
  line-height: 1.5rem;
  font-size: 1rem;
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 400;
  color: ${theme.fontColor1};
  display: block;
`

export default Help
