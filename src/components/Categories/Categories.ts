export type ProductCategory = {
  id: number;
  category: string;
  photos: string[];
};

export const categories: ProductCategory[] = [
  {
    id: 0,
    category: "All products",
    photos: [
      "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_category_1_1.c9eb63e7.png",
      "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_category_1_2.d9e9d4b3.png",
    ],
  },
  {
    id: 1,
    category: "Audio",
    photos: [
      "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_category_2_1.c3b7697e.png",
      "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_category_2_2.2db044a0.png",
    ],
  },
  {
    id: 2,
    category: "Accessories",
    photos: [
      "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_category_3_1.efcd8cd7.png",
      "https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_category_3_2.d6f6c58b.png",
    ],
  },
];
