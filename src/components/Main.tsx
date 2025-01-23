import styled from "@emotion/styled";
import { ReactElement, ReactNode } from "react";

const SMain = styled.main`
  padding: 120px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  @media screen and (max-width: 425px) {
    padding: 24px 16px;
    gap: 60px;
  }

  @media screen and (min-width: 1441px) {
    width: 1260px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Main = ({
  children,
}: {
  children: ReactNode | ReactElement | undefined;
}) => {
  return <SMain>{children}</SMain>;
};
