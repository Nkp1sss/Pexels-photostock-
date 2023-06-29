import './List.scss';

import { useState, useEffect } from 'react';
import { PhotoType } from '../../types';
import Image from '../Image/Image';

function List({ photos }: { photos: PhotoType[] }) {
  const [columnsCount, setColumnsCount] = useState<number>(window.innerWidth < 900 ? 2 : 3);

  useEffect(() => {
    const resize = () => {
      if (columnsCount === 2 && window.innerWidth >= 900) {
        setColumnsCount(3);
      }
      if (columnsCount === 3 && window.innerWidth < 900) {
        setColumnsCount(2);
      }
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  });

  return (
    <div className="list">
      <div className="container">
        {new Array(columnsCount).fill(0).map((_, columnIndex) => (
          <div className="column" key={columnIndex}>
            {photos &&
              photos.map((image, photoIndex) => {
                if (photoIndex % columnsCount === columnIndex)
                  return <Image key={photoIndex} {...image} />;
              })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
