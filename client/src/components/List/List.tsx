import './List.scss';

import { useResizeWindow } from '../../hooks';
import { PhotoType } from '../../types';
import Image from '../Item/Item';

function List({ photos }: { photos: PhotoType[] }) {
  const columnsCount = useResizeWindow();

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
