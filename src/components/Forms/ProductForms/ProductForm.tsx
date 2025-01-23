import { Box, Button, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "../../../store/products/products.slice";
import { useAppDispath } from "../../../store/store";
import { addProduct, updateProduct } from "../../../store/products/action";
import { nanoid } from "@reduxjs/toolkit";

type FormValues = {
  name: string;
  img: string;
  desc: string;
  price: number;
};

// const defaultValues: FormValues = {
//   name: "",
//   img: "",
//   desc: "",
//   price: null,
// };

interface IFormProps {
  type: string;
  product?: Product;
}

export const ProductForm = ({ type, product }: IFormProps) => {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useAppDispath();

  console.log(product);
  console.log(errors);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    if (type === "add") {
      const p = { ...getValues(), id: nanoid() };
      dispatch(addProduct(p)).unwrap();
    }

    if (type === "update" && product !== undefined)
      dispatch(
        updateProduct({ ...getValues(), id: product.id } as Product)
      ).unwrap();

    console.log(data);
  };

  return (
    <>
      <Typography sx={{ marginBottom: "10px" }}>{type} product</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField
            type="text"
            placeholder="Please enter name for product ..."
            {...register("name", {
              value: product?.name,
              onChange: (e) => setValue("name", e.target.value),
            })}
          />
          <TextField
            type="text"
            placeholder="Please enter url image for product ..."
            {...register("img", {
              value: product?.img,
              onChange: (e) => setValue("img", e.target.value),
            })}
          />
          <TextField
            type="text"
            placeholder="Please enter product description ..."
            {...register("desc", {
              value: product?.desc,
              onChange: (e) => setValue("desc", e.target.value),
            })}
          />
          <TextField
            type="number"
            placeholder="Please enter product price ..."
            {...register("price", {
              value: product?.price,
              onChange: (e) => setValue("price", e.target.value),
            })}
          />
          <Button type="submit" variant="contained" size="large">
            {type}
          </Button>

          <Typography>Data: {JSON.stringify(getValues())}</Typography>
        </Box>
      </form>
    </>
  );
};
