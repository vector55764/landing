import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

const Aside = styled.aside`
  z-index: 2;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 0;
  height: 100vh;
  background-color: #e5e6e8;
  line-height: 22px;
  animation: exWidth 5s forwards;
  overflow: hidden;

  @keyframes exWidth {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }

  .aside {
    &__button-close {
      cursor: pointer;
    }

    &__content {
      padding: 0 120px;
    }

    &__nav {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 32px;

      &-item {
        width: fit-content;
        position: relative;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 2px;

        &::after {
          content: "";
          position: absolute;

          display: block;
          bottom: -8px;
          height: 2px;
          width: 100%;
          background-color: #292929;

          transition: transform 0.3s;
          transform: scale(0);
          transform-origin: left;
        }

        &:hover::after {
          transform: scale(1);
        }
      }
    }

    &__footer {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0 120px;
    }

    &__link {
      display: inline-block;
      width: fit-content;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      color: #000;
      text-transform: uppercase;

      &-decoration {
        border-bottom: 2px solid #000;
      }
    }
  }
`;

export const Menu = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Aside>
      <div className="header__top">
        <a href="#" className="header__logo">
          <img
            src="https://stepanyukvova200.github.io/Interactive-Product-Showcase/logo.41c5591a.png"
            alt="nothing logo"
          />
        </a>
        <a className="aside__button-close" onClick={handleClose}>
          <CloseIcon />
        </a>
      </div>
      <div className="aside__content">
        <ul className="aside__nav">
          <li className="aside__nav-item">Products</li>
          <li className="aside__nav-item">Store</li>
          <li className="aside__nav-item">Login</li>
          <li className="aside__nav-item">Cart(0)</li>
        </ul>
      </div>
      <div className="aside__footer">
        <a className="aside__link" href="#">
          + 1 234 567 89
        </a>
        <a className={`aside__link aside__link-decoration`} href="">
          Call To Order
        </a>
      </div>
    </Aside>
  );
};
