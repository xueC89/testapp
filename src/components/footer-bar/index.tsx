import React from 'react';
import style from './style.module.scss';
import { observer } from 'mobx-react';

interface FooterBarProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

const FooterBar: React.FC<FooterBarProps> = (props) => {
  return (
    <div>
      <h1>FooterBar</h1>
    </div>
  )
}

export default observer(FooterBar);
