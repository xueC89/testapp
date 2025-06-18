export default defineAppConfig({
  pages: [
    // 'pages/index/index',
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
    "custom": true,
    "color": "#000000",
    "selectedColor": "#000000",
    "backgroundColor": "#000000",
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/list/index',
        text: '画集',
      },
      // {
      //   pagePath: 'null',
      //   text: '上传',
      // },
      {
        pagePath: 'pages/friends/index',
        text: '好友圈',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ]
  },
  "usingComponents": {}
})
