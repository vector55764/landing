import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { Form } from "./style";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const schema = yup.object().shape({
  name: yup.string().required().min(3).max(50),
  email: yup.string().email().required(),
  message: yup.string().required().min(3).max(1000),
});

export const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ defaultValues, resolver: yupResolver(schema) });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className="form__input"
          {...register("name")}
          placeholder="Name"
          type="text"
        />
        {errors.name && <p>{errors.name.message}</p>}
        {/* styling errors */}
      </div>
      <div>
        <input
          className="form__input"
          {...register("email")}
          placeholder="Email"
          type="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <textarea
          className="form__textarea"
          {...register("message")}
          placeholder="Message"
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button className="form__button" type="submit">
        Send
      </button>
    </Form>
  );
};
