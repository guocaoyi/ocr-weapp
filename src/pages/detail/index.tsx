import React from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { css } from 'linaria'

import { theme } from '../../config'

/**
 * Detail Page
 */
export class Detail extends React.Component {
  onScrollToUpper = () => {}

  onScroll(e) {
    console.log(e.detail)
  }

  render() {
    const scrollTop = 0
    const Threshold = 20

    return (
      <ScrollView
        className={scrollStyle}
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop}
        lowerThreshold={Threshold}
        upperThreshold={Threshold}
        onScrollToUpper={this.onScrollToUpper}
        onScroll={this.onScroll}
      >
        <View style={vStyleA}>A</View>
        <View style={vStyleB}>B</View>
        <View style={vStyleC}>C</View>
      </ScrollView>
    )
  }
}

const scrollStyle = css`
  height: 100%;
  color: ${theme.fontColor};
  background-color: ${theme.bgColor};
`

const vStyleA = css`
  height: 10rem;
  background-color: rgb(26, 173, 25);
`
const vStyleB = css`
  height: 10rem;
  background-color: rgb(39, 130, 215);
`
const vStyleC = css`
  height: 10rem;
  background-color: rgb(241, 241, 241);
  color: #333;
`

export default Detail
