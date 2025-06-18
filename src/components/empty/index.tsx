import React from 'react';
import style from './style.module.scss';
import { observer } from 'mobx-react';

interface IProps {

}

const Empty: React.FC<IProps> = (props) => {

  return (
    <div>

    </div>
  )
}

export default observer(Empty);
