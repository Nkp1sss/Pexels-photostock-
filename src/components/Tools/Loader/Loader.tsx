import loader from '../../../assets/loader.svg';

function Loader() {
  return (
    <div className="loader__wrapper" style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={loader} alt="loader" />
    </div>
  );
}

export default Loader;
