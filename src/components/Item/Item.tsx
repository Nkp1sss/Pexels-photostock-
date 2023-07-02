import './Item.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoType } from '../../types';
import { downloadImage, saveToLS, isExistsInLS, removeFromLS } from '../../utils';
import heart from '../../assets/heart.svg';
import filledHeart from '../../assets/filledHeart.svg';
import Download from '../Tools/Download/Download';

function Image({ src, photographer, photographer_url, id }: PhotoType) {
  const [isSaved, setIsSaved] = useState<boolean>(isExistsInLS(id));

  return (
    <div className="image__wrapper">
      <img className="image" src={src.large} alt="image" />
      <Link className="image-photographer" to={photographer_url} target="_blank">
        {photographer}
      </Link>
      <div className="download__wrapper" onClick={() => downloadImage(src.original, 'Image')}>
        <Download />
      </div>
      <div
        className={'like__wrapper ' + (isSaved ? 'visible' : '')}
        onClick={() => {
          if (isExistsInLS(id)) {
            removeFromLS(id);
            setIsSaved(false);
          } else {
            saveToLS(id);
            setIsSaved(true);
          }
        }}
      >
        <img src={isSaved ? filledHeart : heart} alt="like" />
      </div>
    </div>
  );
}

export default Image;
