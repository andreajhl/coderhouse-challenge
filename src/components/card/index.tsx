import { FC } from "react";
import { CardProps } from './index.d';

const Card: FC<CardProps> = ({ title, image, url }) => (
  <a href={url} target='_blank' rel="noopener noreferrer" className="w-full">
    <article>
      <img src={image} alt={`img ${title}`} />
      <h2>{title}</h2>
    </article>
  </a>
);

export default Card;
