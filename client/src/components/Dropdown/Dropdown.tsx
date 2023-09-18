import './Dropdown.scss';

import { useState, useContext } from 'react';
import { useOutsideClick } from '../../hooks';
import { FilterEnum } from '../../constants';
import { DDItemType } from '../../types';
import { FiltersContext } from '../../pages/Category/Category';
import tick from '../../assets/tick.svg';
import Arrow from '../Tools/Arrow/Arrow';

type DropdownPropsType = {
  items: DDItemType[];
  filter: FilterEnum;
};

function Dropdown({ items, filter }: DropdownPropsType) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<DDItemType>(items[0]);

  const handleClickOutside = () => setOpen(false);
  const dropdownRef = useOutsideClick(handleClickOutside);

  const toggle = () => setOpen(!open);

  const { handleOrientationChange, handleSizeChange } = useContext(FiltersContext);
  const handleClickItem = (item: DDItemType) => {
    setSelected(item);
    if (filter === FilterEnum.Orientation) {
      handleOrientationChange(item.value);
    } else {
      handleSizeChange(item.value);
    }
  };

  return (
    <div className="dd-wrapper" onClick={toggle} ref={dropdownRef}>
      <div className="dd-header">
        <div className="dd-header__title">{selected.name}</div>
        <div className={`dd-header__icon ${open ? 'open' : ''}`}>
          <Arrow />
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id} onClick={() => handleClickItem(item)}>
              <p className="dd-list-item__name">{item.name}</p>
              {item.id === selected.id && <img src={tick} alt="selected icon" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
