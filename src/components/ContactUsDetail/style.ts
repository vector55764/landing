import styled from "@emotion/styled";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;

  .contact {
    &__title {
      display: block;
      color: #9393a3;
      font-size: 14px;
      font-weight: 400;
      line-height: 19px;
      margin-bottom: 8px;
    }

    &__link {
      text-decoration: none;
      color: #191919;
      font-family: Space Mono, sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
    }
  }
`;
