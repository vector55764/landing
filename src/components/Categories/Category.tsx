import { ProductCategory } from "./Categories";

export const Category = ({ category }: { category: ProductCategory }) => {
  return (
    <article className="category">
      <div
        className={`category__products ${
          category.id % 2 === 0 ? "category__grid-start" : "category__grid-end"
        }`}
      >
        {category.photos.map((el, i) => (
          <a href="#" className="category__link" key={i}>
            <img src={el} alt="some img desc" className="category__img" />
          </a>
        ))}
      </div>
      <h3 className="category__title">{category.category}</h3>
    </article>
  );
};
