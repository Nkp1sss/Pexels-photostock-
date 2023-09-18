import './Searchbar.scss';

import React, { ChangeEvent, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Magnifier from '../Tools/Magnifier/Magnifier';
import { UseParamsType } from '../../types';

function Searchbar() {
  const { query }: UseParamsType = useParams();
  const [value, setValue] = useState<string>(query ? query : '');
  const navigate = useNavigate();

  const onChangeClick = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/search/${value}`, { replace: true });
    }
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        value={value}
        onChange={onChangeClick}
        placeholder="Search for free photos"
        onKeyDown={onEnterClick}
      />
      <button
        className="search__button"
        onClick={() => navigate(`/search/${value}`, { replace: true })}
      >
        <Magnifier />
      </button>
    </div>
  );
}

export default Searchbar;
