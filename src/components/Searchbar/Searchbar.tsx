import './Searchbar.scss';

import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Magnifier from '../Tools/Magnifier/Magnifier';

function Searchbar() {
  const [value, setValue] = useState<string>('');
  const navigate = useNavigate();

  const onChangeClick = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const onEnterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/search/${value}`, { replace: true });
    }
  };

  return (
    <div className="input__wrapper">
      <input
        className="input"
        type="text"
        value={value}
        onChange={onChangeClick}
        placeholder="Search for free photos"
        onKeyDown={onEnterClick}
      />
      <button
        className="input__button"
        onClick={() => navigate(`/search/${value}`, { replace: true })}
      >
        <Magnifier />
      </button>
    </div>
  );
}

export default Searchbar;
