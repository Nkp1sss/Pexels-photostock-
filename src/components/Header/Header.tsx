import './Header.scss';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPhotosByParams } from '../../api';
import { ResponsePhotosType } from '../../types';
import { getRandomNumber } from '../../utils';
import { getUniqueWords } from '../../utils';
import { queryExamples } from '../../constants';
import Navbar from '../Navbar/Navbar';
import Searchbar from '../Searchbar/Searchbar';

function Header() {
  const [headerData, setHeaderData] = useState<ResponsePhotosType>();

  useEffect(() => {
    getPhotosByParams([
      { key: 'query', value: 'beautiful' },
      { key: 'orientation', value: 'landscape' },
    ]).then((data) => setHeaderData(data));
  }, []);

  const randomNumber = getRandomNumber(0, 14);
  const photoData = headerData && headerData.photos[randomNumber];

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1 className="header__title">
            The best free stock photos, royalty free images & videos shared by creators.
          </h1>
          <Searchbar />
          <div className="header__trending">
            Trending:{' '}
            {getUniqueWords(queryExamples, 7).map((word, index) => (
              <span key={`${word}-${index}`}>
                <Link to={`/search/${word}`}>{word}</Link>,&nbsp;
              </span>
            ))}
          </div>
        </div>
        {photoData && (
          <>
            <img
              className="header__background"
              src={photoData.src.landscape}
              alt="header background"
            />
            <Link to={photoData.photographer_url as string} target="_blank">
              <p className="photo-by">
                Photo by&nbsp;
                <span>{photoData?.photographer}</span>
              </p>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
