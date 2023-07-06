import './Category.scss';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState, createContext } from 'react';
import { useParams } from 'react-router';
import { PhotoType, ResponsePhotosType, UseParamsType } from '../../types';
import { getPhotosByParams, getPhotosByString } from '../../api/photos';
import List from '../../components/List/List';
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Tools/Loader/Loader';
import Filters from '../../components/Filters/Filters';

type FiltersContextType = {
  handleOrientationChange: (data: string) => void;
  handleSizeChange: (data: string) => void;
};

export const FiltersContext = createContext<FiltersContextType>({
  handleOrientationChange: () => {},
  handleSizeChange: () => {},
});

function Category() {
  const { query }: UseParamsType = useParams();
  const [response, setResponse] = useState<ResponsePhotosType>();
  const [images, setImages] = useState<PhotoType[]>([]);
  console.log(images);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orientation, setOrientation] = useState<string>('');
  const [size, setSize] = useState<string>('');

  const handleOrientationChange = (data: string) => setOrientation(data);
  const handleSizeChange = (data: string) => setSize(data);

  useEffect(() => {
    setIsLoading(true);
    getPhotosByParams([
      { key: 'query', value: query || '' },
      { key: 'per_page', value: '30' },
      { key: 'orientation', value: orientation },
      { key: 'size', value: size },
    ]).then((data) => {
      if (data) {
        setResponse(data);
        setImages(data.photos);
        setIsLoading(false);
      }
    });
  }, [query, orientation, size]);

  const fetchMorePhotos = () => {
    if (response && response.next_page) {
      getPhotosByString(response.next_page).then((data) => {
        if (data) {
          setResponse(data);
          setImages((oldImages) => [...oldImages, ...data.photos]);
        }
      });
    }
  };

  return (
    <FiltersContext.Provider value={{ handleOrientationChange, handleSizeChange }}>
      <div className="category-page">
        <Navbar />
        <Filters />
        {!isLoading ? (
          <>
            {response && !images.length ? (
              <h2 className="notfound container">
                We couldn’t find anything for &ldquo;{`${query}`}&ldquo;.
                <br />
                Try to refine your search.
              </h2>
            ) : (
              <>
                <h2 className="title">{`${query} Photos`}</h2>
                <InfiniteScroll
                  style={{ overflow: 'unset' }}
                  dataLength={images.length}
                  hasMore={!!response?.next_page}
                  loader={<Loader />}
                  next={fetchMorePhotos}
                >
                  <List photos={images} />
                </InfiniteScroll>
              </>
            )}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </FiltersContext.Provider>
  );
}

export default Category;
