export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/home/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'DJ的画作管理工具',
    navigationBarTextStyle: 'black'
  },
  // tabBar: {
  //   list: [
  //     {
  //       pagePath: 'pages/index/index',
  //       text: '首页',
  //       iconPath: './assets/images/home.png',
  //       selectedIconPath: './assets/images/home-active.png'
  //     },
  //     {
  //       pagePath: 'pages/home/index',
  //       text: '我的',
  //       iconPath: './assets/images/home.png',
  //       selectedIconPath: './assets/images/home-active.png'
  //     }
  //   ]
  // }
})
