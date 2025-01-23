import { ReactElement } from "react";

type LiElementProps = {
  title: string | undefined;
  content: ReactElement | string | undefined;
  link: string | undefined;
};

export const LiElement = ({ title, content, link }: LiElementProps) => {
  return (
    <li>
      <div>
        <span className="contact__title">{title}</span>
        <a href={link} target="_blank" className="contact__link">
          {content}
        </a>
      </div>
    </li>
  );
};
