import styled from "@emotion/styled";

const Description = styled.p`
  max-width: 400px;
  margin: 0;
  font-family: Space Mono, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-align: justify;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;
//abou test new commit
export const AboutDescription = () => {
  return (
    <Description>
      We’re a London-based tech company on a mission to remove barriers between
      people and technology.
      <br />
      <br />
      To do this, we’re crafting intuitive, flawlessly connected products that
      improve our lives without getting in the way. No confusing tech-speak. No
      silly product names. Just artistry, passion and trust. And products we’re
      proud to share with our friends and family. Simple.
      <br />
      <br />
      Because beautiful tech shouldn’t be complicated.
    </Description>
  );
};
