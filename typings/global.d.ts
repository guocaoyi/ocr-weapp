/// <reference types="@tarojs/taro" />

declare module 'tesseract.js'
declare module 'tesseract.js-core'

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

declare namespace JSX {
  interface IntrinsicElements {
    import: React.DetailedHTMLProps<
      React.EmbedHTMLAttributes<HTMLEmbedElement>,
      HTMLEmbedElement
    >
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'rn'
      | 'tt'
      | 'quickapp'
      | 'qq'
      | 'jd'
  }
}
