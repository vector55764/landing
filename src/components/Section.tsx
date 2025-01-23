import styled from "@emotion/styled";
import { ReactElement, ReactNode } from "react";

type SectionProps = {
  title: string | undefined;
  children: ReactNode | ReactElement | undefined;
  name: string;
  direction: "row" | "column" | undefined;
};

type StyledSectionProps = {
  name: string;
  direction: "row" | "column" | undefined;
};

const StyledSection = styled.section<StyledSectionProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: ${(props) => (props.direction === "row" ? "110px" : "")};
  & > * {
    flex: ${(props) => (props.direction === "row" ? "1 1" : "")};
  }

  @media screen and (max-width: 1024px) {
    flex-direction: ${(props) => (props.name === "about" ? "column" : "")};
    gap: 10px;
  }
  .section {
    &__title {
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      margin: 0 0 56px 0;
      letter-spacing: 2px;

      @media screen and (max-width: 1024px) {
        margin-bottom: 16px;
      }
    }

    &__content {
      display: grid;
      grid-template-columns: ${(props) =>
        props.name === "contact" ? "1fr 1fr" : "1fr"};
      gap: 110px;

      @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: ${(props) =>
          props.name === "contact" ? "column" : ""};
        justify-content: center;
      }
    }
  }
`;

export const Section = ({ title, children, direction, name }: SectionProps) => {
  return (
    <StyledSection direction={direction} name={name}>
      <h3 className="section__title">{title}</h3>
      <div className="section__content">{children}</div>
    </StyledSection>
  );
};
