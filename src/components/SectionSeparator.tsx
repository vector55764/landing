import styled from "@emotion/styled";

const Separator = styled.div`
  width: calc(100% + 144px);
  height: 460px;
  margin-bottom: 56px;
  background-image: url(https://stepanyukvova200.github.io/Interactive-Product-Showcase/Image_site_separator.e2d38802.png);
  background-position: 50%;
  background-size: cover;

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
    width: 100vw;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const SectionSeparator = () => {
  return <Separator />;
};
