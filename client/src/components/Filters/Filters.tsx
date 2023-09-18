import './Filters.scss';

import { FilterEnum, orientationItems, sizeItems } from '../../constants';
import Dropdown from '../Dropdown/Dropdown';

function Filters() {
  return (
    <div className="filters-wrapper">
      <Dropdown items={orientationItems} filter={FilterEnum.Orientation} />
      <Dropdown items={sizeItems} filter={FilterEnum.Size} />
    </div>
  );
}

export default Filters;
