import './Filters.scss';

import Dropdown from '../Dropdown/Dropdown';
import { FilterEnum, orientationItems, sizeItems } from '../../constants';

function Filters() {
  return (
    <div className="filters-wrapper">
      <Dropdown items={orientationItems} filter={FilterEnum.Orientation} />
      <Dropdown items={sizeItems} filter={FilterEnum.Size} />
    </div>
  );
}

export default Filters;
