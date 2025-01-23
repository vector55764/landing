import { categories } from "./Categories";
import { Category } from "./Category";

import { CategoryWrapper } from "./style";

export const CategoriesList = () => {
  return (
    <CategoryWrapper>
      {categories.map((el) => (
        <Category category={el} key={el.id} />
      ))}
      <button className="category__button">View all</button>
    </CategoryWrapper>
  );
};
