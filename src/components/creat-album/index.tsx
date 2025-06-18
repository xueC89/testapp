import { observer } from 'mobx-react';
import React from 'react';
import style from './style.module.scss';

interface CreatAlbumProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

const CreatAlbum: React.FC<CreatAlbumProps> = (props) => {

  return (
    <div>
      <h1>Creat Album</h1>
    </div>
  )
}

export default observer(CreatAlbum);
