import React, { useState } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);

  const onSwitchTab = (url, index) => {
    Taro.switchTab({
      url
    });
    setActiveIndex(index)
  }

  const renderMenu = () => {
    return menuList.map((menuItem, menuIndex) => {
      return (
        <>
          <View
            key={menuItem.pagePath}
            className={activeIndex === menuIndex ? "bar-container__item bar-container__item-active" : "bar-container__item"}
            onClick={() => { onSwitchTab('/' + menuItem.pagePath, menuIndex) }}
          >{menuItem.text}</View>
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