import styled from "@emotion/styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Menu } from "./Menu";

const SHeader = styled.header`
  width: 100%;
  height: 100vh;
  background-image: url("https://stepanyukvova200.github.io/Interactive-Product-Showcase/header-bg.916cf00a.png");
  background-position: 50%;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;

  .header {
    &__top {
      display: flex;
      justify-content: space-between;
      padding: 36px 120px;
    }

    &__bottom {
      margin-left: 120px;
      margin-bottom: 96px;
    }

    &__title {
      font-size: 56px;
      line-height: 56px;
      font-weight: 700;
    }

    &__logo {
      width: 172px;
      min-height: 32px;
      display: flex;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
      margin: 0;
      height: 0;
      transition: transform 0.3s;
      transform: scale(1);
      transform-origin: left;

      &:hover {
        transform: scale(1.2);
      }

      & > img {
        width: 100%;
        height: 24px;
      }
    }

    &__buttons {
      display: flex;
      gap: 24px;
    }

    &__button {
      color: black;
      text-decoration: none;
      cursor: pointer;
      margin: 0;
      height: 0;
      & > svg {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SHeader>
      <div className="header__top">
        <a href="#" className="header__logo">
          <img
            src="https://stepanyukvova200.github.io/Interactive-Product-Showcase/logo.41c5591a.png"
            alt="nothing logo"
          />
        </a>
        <div className="header__buttons">
          <a href="tel: +1 234 567 89" className="header__button">
            <LocalPhoneIcon />
          </a>
          <a
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="header__button"
          >
            <MenuIcon />
          </a>
        </div>
      </div>
      <div className="header__bottom">
        <h1 className="header__title">
          Bring joy back
          <br />
          to the everyday
        </h1>
      </div>

      {isOpen && <Menu handleClose={() => setIsOpen(!isOpen)} />}
    </SHeader>
  );
};
