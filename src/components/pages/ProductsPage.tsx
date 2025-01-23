import { Layout } from "../Layout";
import { ProductsList } from "../ProductsList";
import { SearchForm } from "../SearchForm";
import { Section } from "../Section";

export const ProductsPage = () => {
  return (
    <Layout>
      <SearchForm />
      <Section title="All Products" direction="column" name="all-products">
        <ProductsList />
      </Section>
    </Layout>
  );
};
