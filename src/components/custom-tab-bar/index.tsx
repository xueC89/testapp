import React from 'react';
import style from './style.scss';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';

interface CustomTabBarProps {
  title: string;
  onBack: () => void;
}

const CustomTabBar: React.FC<CustomTabBarProps> = (props) => {
  return (
    <View className={style.nav}>

    </View>
  )
}

export default observer(CustomTabBar);
