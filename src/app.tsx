import React, { PropsWithChildren } from 'react'
import { Provider } from 'mobx-react'

import counterStore from './store/counter'

import './app.scss'

const store = {
  counterStore
}

const App: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default App 