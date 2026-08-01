import { catalogContent } from "../data/catalog";

type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function CatalogPagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <nav
      className="catalog-pagination"
      aria-label={catalogContent.pagination.pageLabel}
    >
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        ← {catalogContent.pagination.previous}
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (item) => (
            <button
              className={item === page ? "is-active" : ""}
              type="button"
              aria-current={item === page ? "page" : undefined}
              onClick={() => onPageChange(item)}
              key={item}
            >
              {item}
            </button>
          ),
        )}
      </div>
      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        {catalogContent.pagination.next} →
      </button>
    </nav>
  );
}
