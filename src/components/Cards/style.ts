import styled from "@emotion/styled";

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 60px;
  column-gap: 24px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .card {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1024px) {
      max-width: 512px;
    }

    &__img {
      width: 100%;
      height: 100%;
      margin-bottom: 24px;
      object-fit: cover;
    }

    &__title {
      font-size: 18px;
      font-weight: 700;
      line-height: 25px;
      margin: 0 0 8px 0;
    }

    &__desc {
      margin: 0 0 12px 0;
      padding: 0;
      font-family: "Space Mono", serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 1px;
      text-align: justify;
    }

    &__price {
      display: block;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
    }

    &__buttons {
      margin-top: 12px;
      display: flex;
      gap: 20px;
    }

    &__button {
      width: 80px;
      height: 24px;
      border-width: 2px;
      border-radius: 4px;
      letter-spacing: 1px;

      &-add {
        background-color: rgb(90, 186, 26);
        color: white;
      }

      &-update {
        background-color: rgb(70, 116, 232);
        color: white;
      }

      &-delete {
        background-color: rgb(151, 34, 34);
        color: white;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
