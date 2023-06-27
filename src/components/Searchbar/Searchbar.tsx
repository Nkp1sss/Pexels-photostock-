import './Searchbar.scss';
import Magnifier from '../Icons/Magnifier/Magnifier';

function Searchbar() {
  return (
    <div className="input__wrapper">
      <input className="input" type="text" placeholder="Search for free photos" />
      <button className="input__button">
        <Magnifier />
      </button>
    </div>
  );
}

export default Searchbar;
