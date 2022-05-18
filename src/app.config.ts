export default defineAppConfig({
  pages: [
    'pages/index/index', // 场景
    'pages/common/index', // 通用场景
    'pages/archive/index', // 归档页
    'pages/detail/index', // 详情页
    'pages/help/index', // 帮助页
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#d9d9d9',
    selectedColor: '#391085',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '证件',
        iconPath: 'assets/license.png',
        selectedIconPath: 'assets/license.png',
      },
      {
        pagePath: 'pages/common/index',
        text: '通用',
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
