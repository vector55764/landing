import styled from "@emotion/styled";
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 120px;

  .category {
    &__products {
      max-height: 324px;
      margin-bottom: 16px;
      display: grid;
      gap: 24px;
    }

    &__grid-start {
      grid-template-columns: 2fr 1fr;
    }

    &__grid-end {
      grid-template-columns: 1fr 2fr;
    }

    &__grid-end,
    &__grid-start {
      @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
    }

    &__link {
      min-width: 100%;
      transition: transform 0.3s;
      transform: scale(1);
      transform-origin: left;

      &:hover {
        transform: scale(1.03);
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      max-height: 324px;
      border-radius: 8px;
      object-fit: cover;
    }

    &__title {
      font-size: 24px;
      line-height: 33px;
      margin: 0;
      font-weight: 700;
    }

    &__button {
      text-align: center;
      color: #fff;
      background-color: #292929;
      font-weight: 700;
      line-height: 56px;
      border: 2px solid black;
      border-radius: 8px;
      font-size: 16px;
      transition: all 0.3s;

      &:hover {
        color: #292929;
        background-color: #f8f8fa;
        border-color: #f0f1f4;
      }

      &:active {
        color: #fff;
        background-color: #111;
        border-color: #111;
      }
    }
  }
`;
