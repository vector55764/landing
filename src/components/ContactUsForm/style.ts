import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  .form {
    &__input,
    &__textarea,
    &__button {
      box-sizing: border-box;
      color: #292929;
      background-color: #f8f8fa;
      border: 2px solid transparent;
      border-radius: 8px;
      width: 100%;

      padding: 14px 16px;
      font-family: Space Mono, sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      outline: none;
      transition: all 0.3s;
      &:hover {
        color: #292929;
        border-color: #f0f1f4;
      }
    }

    &__input,
    &__textarea {
      &:focus {
        border-color: #292929;
      }
    }
    &__input {
      height: 48px;
      margin-bottom: 16px;
    }

    &__textarea {
      resize: none;
      height: 148px;
      margin-bottom: 32px;
    }

    &__button {
      text-align: center;
      height: 56px;
      cursor: pointer;
    }
  }
`;
