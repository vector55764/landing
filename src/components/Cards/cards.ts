import { Product } from "../../store/products/products.slice";

export type CardItem = {
  id: number | undefined;
  img: string | undefined;
  name: string | undefined;
  desc: string | undefined;
  price: number | undefined;
};

export const cards: Product[] = [
  {
    id: "0",
    img: "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_product_1.7079eb3f.png",
    name: "Phone (1)",
    desc: "Designed with instinct, to bring joy back to the everyday. Through the Glyph Interface, a perfected OS and exceptional dual camera. All startlingly fast.",
    price: 499,
  },
  {
    id: "1",
    img: "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_product_2.8bb251bf.png",
    name: "Ear (2)",
    desc: "Perfecting the path from artist to ear. So that music sounds just as it was intended.",
    price: 149,
  },
  {
    id: "2",
    img: "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_product_3.fee18654.png",
    name: "Ear (stick)",
    desc: "Tech you can’t feel. Leaving just space for sound to come to life. Powered by custom sound technology.",
    price: 119,
  },
];
