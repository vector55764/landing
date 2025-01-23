import { ReactElement, ReactNode } from "react";
import { Header } from "./Header";
import { Main } from "./Main";

export const Layout = ({
  children,
}: {
  children: ReactNode | ReactElement | undefined;
}) => {
  return (
    <>
      <div className="layout">
        <Header />
        <Main>{children}</Main>
      </div>
    </>
  );
};
