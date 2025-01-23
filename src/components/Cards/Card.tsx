import { useState } from "react";
import { deleteProduct } from "../../store/products/action";
import { Product, ProductId } from "../../store/products/products.slice";
import { useAppDispath } from "../../store/store";
import { ProductModal } from "../Modals/ProductModal/ProductModal";
import { ProductForm } from "../Forms/ProductForms/ProductForm";

export const Card = ({
  card,
  isAdmin,
}: {
  card: Product;
  isAdmin: boolean;
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispath();

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleDeleteProduct = (id: ProductId) => {
    dispatch(deleteProduct(id));
  };
  return (
    <article className="card">
      <img src={card.img} alt="img for product card" className="card__img" />
      <h4 className="card__title">{card.name}</h4>
      <p className="card__desc">{card.desc}</p>
      <span className="card__price">{`$ ${card.price}.00`}</span>
      {isAdmin && (
        <div className="card__buttons">
          <button
            className={`card__button card__button-update`}
            onClick={handleToggleModal}
          >
            Update
          </button>

          {showModal && (
            <ProductModal
              open={showModal}
              handleClose={handleToggleModal}
              children={<ProductForm type="update" product={card} />}
            />
          )}

          <button
            className={`card__button card__button-delete`}
            onClick={() => handleDeleteProduct(card.id)}
          >
            Delete
          </button>
        </div>
      )}
    </article>
  );
};
