export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/common/index',
    'pages/archive/index',
    'pages/detail/index',
    'pages/help/index',
  ],
  window: {
    navigationBarBackgroundColor: '#ffffff',
    navigationBarTextStyle: 'black',
    backgroundTextStyle: 'light',
  },
  tabBar: {
    color: '#d9d9d9',
    selectedColor: '#391085',
    backgroundColor: '#ffffff',
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
