import './Category.scss';
import { useParams } from 'react-router';

function Category() {
  console.log(useParams());
  return <div>Category Page</div>;
}

export default Category;
