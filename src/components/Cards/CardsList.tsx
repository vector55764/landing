import { Card } from "./Card";
import { cards } from "./cards";
import { CardsWrapper } from "./style";

export const CardsList = () => {
  return (
    <CardsWrapper>
      {cards.map((el) => (
        <Card card={el} key={el.id} isAdmin={false} />
      ))}
    </CardsWrapper>
  );
};
