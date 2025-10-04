import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
  itemsPerPage,
  startIndex,
  delta = 2,
}) {
  // Always show pagination even if only 1 page
  const getPages = () => {
    const range = [];

    // Add pages around current page
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    // Add ellipsis if needed
    if (currentPage - delta > 2) range.unshift("...");
    if (currentPage + delta < totalPages - 1) range.push("...");

    // Always include first and last page
    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  return (
    <div className="card-footer is-align-items-center is-flex is-gap-3 is-justify-content-space-between px-5 pb-5">
      <span className="fs-7 gray-700">
        Showing {totalItems === 0 ? 0 : startIndex + 1} to{" "}
        {Math.min(startIndex + itemsPerPage, totalItems)} of {totalItems} entries
      </span>

      <ul className="pagination ml-auto">
        {/* First */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(1);
            }}
          >
            «
          </a>
        </li>

        {/* Previous */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage - 1);
            }}
          >
            ‹
          </a>
        </li>

        {/* Page numbers */}
        {getPages().map((page, idx) =>
          page === "..." ? (
            <li key={idx} className="page-item disabled">
              <span className="page-link">…</span>
            </li>
          ) : (
            <li
              key={idx}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          )
        )}

        {/* Next */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(currentPage + 1);
            }}
          >
            ›
          </a>
        </li>

        {/* Last */}
        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(totalPages);
            }}
          >
            »
          </a>
        </li>
      </ul>
    </div>
  );
}
