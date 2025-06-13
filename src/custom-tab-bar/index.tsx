import React, { useEffect, useState } from 'react';
import style from './index.scss';
import { View } from '@tarojs/components';
import { observer } from 'mobx-react';
import Taro from '@tarojs/taro';

const menuList = [
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

const CustomTabBar = () => {
  const pages = Taro.getCurrentPages();
  const currentPage = pages[0];
  const [activeIndex, setActiveIndex] = useState(0);

  const onSwitchTab = (url, index) => {
    Taro.switchTab({
      url
    });
  }

  // 处理bar的active
  useEffect(() => {
    const index = menuList.findIndex(item => item.pagePath === currentPage.route)
    if (index > -1) {
      setActiveIndex(index)
    }
  }, [currentPage.route])

  const renderMenu = () => {
    return menuList.map((menuItem, menuIndex) => {
      return (
        <>
          <View
            key={menuItem.pagePath}
            className={`${style.barItem} ${activeIndex === menuIndex ? style.activeItem : ''}`}
            onClick={() => { onSwitchTab('/' + menuItem.pagePath, menuIndex) }}
          >
            {menuItem.text}
          </View>
        </>
      )
    })
  }

  return (
    <View className={style.customTabBar}>
      {renderMenu()}
    </View>
  )
}

export default observer(CustomTabBar);