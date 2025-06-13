import React from 'react'
import { View, Text } from '@tarojs/components'
import { observer } from 'mobx-react'
import { useInjectedStore } from '@/hooks';
import style from './index.scss';
import { Button } from '@nutui/nutui-react-taro'


type Store = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

const Index: React.FC = () => {
  const store = useInjectedStore<Store>('store')

  const increment = () => {
    const { counterStore } = store
    counterStore.increment()
  }

  const decrement = () => {
    const { counterStore } = store
    counterStore.decrement()
  }

  const incrementAsync = () => {
    const { counterStore } = store
    counterStore.incrementAsync()
  }

  const { counterStore: { counter } } = store

  return (
    <View className='index'>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>{counter}</Text>
    </View>
  )
}

export default observer(Index)