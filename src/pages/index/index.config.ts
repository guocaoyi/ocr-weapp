import { theme } from '@config/constant'

export default definePageConfig({
  navigationBarBackgroundColor: theme.primary ?? '#391085',
  navigationBarTextStyle: 'white',
  navigationBarTitleText: '扫描',
  enablePullDownRefresh: false,
})
