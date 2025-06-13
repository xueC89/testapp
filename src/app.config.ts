export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/index',
    'pages/list/index',
    'pages/friends/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'DJ的画作管理工具',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/home/index',
        text: '画集',
      },
      {
        pagePath: '',
        text: '上传',
      },
      {
        pagePath: 'pages/home/index',
        text: '好友圈',
      },
      {
        pagePath: 'pages/home/index',
        text: '我的',
      },
    ]
  }
})
