import './Category.scss';
import { useParams } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

function Category() {
  console.log(useParams());
  return (
    <div className="category-page" style={{ height: '3000px' }}>
      <Navbar />
      <div>Category Page</div>
    </div>
  );
}

export default Category;
