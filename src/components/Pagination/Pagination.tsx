import { FC } from "react";
import ReactPaginate from "react-paginate";
import './styles.scss';

type PaginationProps = {
  itemsCount: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  itemsCount,
  currentPage,
  onChange,
}) => {
  return (
    <ReactPaginate
      containerClassName="c-pagination"
      pageClassName="c-pagination-margin c-pagination-text"
      activeClassName="c-pagination-text--active"
      previousClassName="c-pagination-margin c-pagination-text"
      breakClassName="c-pagination-margin"
      nextClassName="c-pagination-text"
      pageCount={Math.ceil(itemsCount / 30)}
      marginPagesDisplayed={4}
      pageRangeDisplayed={3}
      onPageChange={({ selected }) => onChange(selected)}
    />
  );
};

export { Pagination };
