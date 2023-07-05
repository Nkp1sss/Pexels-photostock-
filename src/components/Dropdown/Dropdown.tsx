import './Dropdown.scss';

import { useState, useContext } from 'react';
import { useOutsideClick } from '../../hooks';
import { FiltersContext } from '../../pages/Category/Category';
import { FilterEnum } from '../../constants';

export type ItemType = {
  id: number;
  name: string;
  value: string;
};

type DropdownPropsType = {
  items: ItemType[];
  filter: FilterEnum;
};

function Dropdown({ items, filter }: DropdownPropsType) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<ItemType>(items[0]);

  const handleClickOutside = () => setOpen(false);
  const dropdownRef = useOutsideClick(handleClickOutside);

  const toggle = () => setOpen(!open);

  const { handleOrientationChange, handleSizeChange } = useContext(FiltersContext);
  const handleClickItem = (item: ItemType) => {
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
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id} onClick={() => handleClickItem(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
