import { Section } from "../Section";
import { ContactUsForm } from "../ContactUsForm/ContactUsForm";
import { ContactUsDetail } from "../ContactUsDetail/ContactUsDetail";
import { AboutDescription } from "../AboutDescription";
import { SectionSeparator } from "../SectionSeparator";
import { CategoriesList } from "../Categories/CategoriesList";
import { CardsList } from "../Cards/CardsList";
import { Layout } from "../Layout";

export const HomePage = () => {
  return (
    <>
      <Layout
        children={
          <>
            <Section
              title="Recommended"
              children={<CardsList />}
              direction="column"
              name="recommended"
            ></Section>
            <Section
              title="Browse Nothing products by category"
              children={
                <>
                  <CategoriesList />
                </>
              }
              direction="column"
              name="category"
            ></Section>
            <SectionSeparator />
            <Section
              title="About Us"
              children={
                <>
                  <AboutDescription />
                </>
              }
              direction="row"
              name="about"
            ></Section>
            <Section
              title="Contact us"
              children={
                <>
                  <ContactUsForm />
                  <ContactUsDetail />
                </>
              }
              direction="column"
              name="contact"
            ></Section>
          </>
        }
      ></Layout>
    </>
  );
};
