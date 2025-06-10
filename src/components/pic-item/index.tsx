import React from 'react';
import style from './style.scss';
import { observer } from 'mobx-react';

interface PicItemProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

const PicItem: React.FC<PicItemProps> = (props) => {
  return (
    <div>
      <h1>PicItem</h1>
    </div>
  )
}

export default observer(PicItem);