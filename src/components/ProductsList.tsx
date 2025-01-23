import { useEffect, useMemo, useState } from "react";
import { useAppDispath, useAppSelector } from "../store/store";
import { fetchProducts } from "../store/products/action";
import { CardsWrapper } from "./Cards/style";
import { Card } from "./Cards/Card";
import { ProductModal } from "./Modals/ProductModal/ProductModal";
import { ProductForm } from "./Forms/ProductForms/ProductForm";
import { useLocation } from "react-router-dom";

export const ProductsList = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispath();
  const { data, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const filterValue = searchParams.get("name");
  const minValue = Number(searchParams.get("minPrice")) || 0;
  const maxValue = Number(searchParams.get("maxPrice")) || 5000;

  const filteredProducts = useMemo(() => {
    if (filterValue !== null) {
      return data.filter(
        (product) =>
          product.name.toLowerCase().includes(filterValue.toLowerCase()) &&
          product.price > minValue &&
          product.price < maxValue
      );
    } else {
      return data.filter(
        (product) => product.price > minValue && product.price < maxValue
      );
    }
  }, [data, filterValue, minValue, maxValue]);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  if (loading) console.log("loading ...");
  if (error) console.log(error);

  if (filteredProducts.length === 0) return <div>Nothing ...</div>;

  return (
    <CardsWrapper>
      {filteredProducts.map((product) => (
        <Card key={product.id} card={product} isAdmin={true} />
      ))}
      <button
        className={`card__button  card__button-add`}
        onClick={handleToggleModal}
      >
        Add
      </button>
      {showModal && (
        <ProductModal
          open={showModal}
          handleClose={handleToggleModal}
          children={<ProductForm type="add" />}
        />
      )}
    </CardsWrapper>
  );
};
