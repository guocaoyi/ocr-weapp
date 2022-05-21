import Taro from '@tarojs/taro'
import { Component } from 'react'
import { css } from 'linaria'

import type { Response } from 'cloud-web-api'

import { Layout } from './components/layout'
import { WX_CLOUD_ENV, theme } from './config'

/**
 * Taro Main Component(entry)
 */
export class App extends Component {
  componentDidMount() {
    Taro?.cloud?.init?.({
      env: WX_CLOUD_ENV,
      traceUser: true,
    })
  }

  componentDidCatchError() {
    const a: Response = {
      errcode: '-1',
      errmsg: '',
    }
    console?.info?.(a)
  }

  render() {
    return <Layout className={globals}>{this.props.children}</Layout>
  }
}

export const globals = css`
  :global() {
    :root {
      --primary: ${theme.primary};
      --bgColor: ${theme.bgColor};
    }

    page {
      height: 100%;
      display: flex;
    }
  }
`

export default App
