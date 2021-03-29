import { FC } from "react";
import type { Repository } from "typings/repository";
import StarIcon from 'assets/StarIcon'
import "./styles.scss";

type ListProps = {
  items: Array<Repository>;
};

const List: FC<ListProps> = ({ items }) => {
  return (
    <ul className="c-list">
      {items.map((r: Repository, idx) => (
        <li className="c-list__item" key={r.id}>
          <div className="c-list__item__info">
            <small>{idx + 1}.</small>{' '}
            <a href={r.html_url} target="_blank" rel="noreferrer">{r.name}</a>
          </div>
          <div className="c-list__item__stars">
            <StarIcon />
          <span>{Intl.NumberFormat().format(r.stargazers_count)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export { List };
