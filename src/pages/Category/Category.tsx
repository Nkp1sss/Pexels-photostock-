import './Category.scss';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PhotoType, ResponsePhotosType, UseParamsType } from '../../types';
import { getPhotosByParams, getPhotosByString } from '../../api';
import List from '../../components/List/List';
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Tools/Loader/Loader';

function Category() {
  const { query }: UseParamsType = useParams();
  const [response, setResponse] = useState<ResponsePhotosType>();
  const [images, setImages] = useState<PhotoType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getPhotosByParams([
      { key: 'query', value: query || '' },
      { key: 'per_page', value: '30' },
    ]).then((data) => {
      if (data) {
        setResponse(data);
        setImages(data.photos);
        setIsLoading(false);
      }
    });
  }, [query]);

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
    <div className="category-page">
      <Navbar />
      {!isLoading ? (
        <>
          {response && !images.length ? (
            <h2 className="notfound container">
              We couldn’t find anything for &ldquo;{`${query}`}&ldquo;.
              <br />
              Try to refine your search.
            </h2>
          ) : (
            <h2 className="title">{`${query} Photos`}</h2>
          )}
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
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Category;
