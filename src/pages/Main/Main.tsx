import './Main.scss';

import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { getPhotosByParams, getPhotosByString } from '../../api';
import { ResponsePhotosType, PhotoType } from '../../types';
import List from '../../components/List/List';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Loader from '../../components/Tools/Loader/Loader';

function Main() {
  const [response, setResponse] = useState<ResponsePhotosType>();
  const [images, setImages] = useState<PhotoType[]>([]);

  useEffect(() => {
    getPhotosByParams([
      { key: 'query', value: 'papa' },
      { key: 'per_page', value: '30' },
    ]).then((data) => {
      if (data) {
        setResponse(data);
        setImages(data.photos);
      }
    });
  }, []);

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
    <div className="main-page">
      <Navbar />
      <Header />
      <InfiniteScroll
        style={{ overflow: 'unset' }}
        dataLength={images.length}
        hasMore={!!response?.next_page}
        loader={<Loader />}
        next={fetchMorePhotos}
      >
        <List photos={images} />
      </InfiniteScroll>
    </div>
  );
}

export default Main;
