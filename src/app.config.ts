import { theme } from './config/constant'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/archive/index',
    'pages/help/index',
    'pages/detail/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: theme.block,
    selectedColor: theme.primary,
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '扫描',
        iconPath: 'assets/scan-light.png',
        selectedIconPath: 'assets/scan-action.png',
      },
      {
        pagePath: 'pages/archive/index',
        text: '归档',
        iconPath: 'assets/clock-light.png',
        selectedIconPath: 'assets/clock-action.png',
      },
    ],
  },
})
