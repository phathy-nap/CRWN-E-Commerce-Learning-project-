import CategoryItem from '../category-item/category-item.component';
import './category-container.styles.scss'

const CategoryContainer = ({categories}) => {
  
  return (
    <div>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
export default CategoryContainer;
