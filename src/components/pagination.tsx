import ChevronLeft from "../assets/chevron-left";
import ChevronRight from "../assets/chevron-right";

type PaginationProps = {
  onPaginate: (page: number) => void;
  numberOfPages: number;
  activePage: number;
};

const Pagination = ({
  onPaginate,
  activePage,
  numberOfPages,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <span
        onClick={() => onPaginate(activePage - 1)}
        className={`pagination__item ${activePage <= 1 ? "isDisabled" : ""}`}
      >
        <ChevronLeft />
      </span>
      {Array(3)
        .fill("")
        .map((page, index) => {
          return (
            <span
              key={index}
              onClick={() => onPaginate(index + 1)}
              className={`pagination__item ${
                activePage === index + 1 ? "isActive" : ""
              }`}
            >
              {index + 1}
            </span>
          );
        })}
      <span
        onClick={() => onPaginate(activePage + 1)}
        className={`pagination__item ${
          activePage >= numberOfPages ? "isDisabled" : ""
        }`}
      >
        <ChevronRight />
      </span>
    </div>
  );
};

export default Pagination;
