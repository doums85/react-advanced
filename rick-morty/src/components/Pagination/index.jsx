import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ info, setFilters }) => {

  return (
    <ReactPaginate
      className="pagination"
      pageCount={info?.pages}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName={info?.next ? 'pagination__next' : 'pagination__next inactive'}
      previousClassName={info?.prev ? 'pagination__prev' : 'pagination__prev inactive'}
      pageClassName="pagination__item"
      pageLinkClassName="pagination__item--link"
      activeClassName="pagination__active"
      onPageChange={({ selected }) =>
        setFilters((currentState) => ({ ...currentState, page: selected + 1 }))
      }
    />
  );
};

export default Pagination;
