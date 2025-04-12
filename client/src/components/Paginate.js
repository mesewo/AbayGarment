import React from 'react';
import './Paginate.css'; // Import the paginate.css file

const Paginate = ({ pages, page, isAdmin = false, keyword = '' }) => {
  return (
    pages > 1 && (
      <ul className="pagination">
        {[...Array(pages).keys()].map((x) => (
          <li key={x + 1} className="pagination-item">
            <a
              href={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                  : `/admin/productlist/${x + 1}`
              }
              className={`pagination-link ${x + 1 === page ? 'active' : ''}`}
            >
              {x + 1}
            </a>
          </li>
        ))}
      </ul>
    )
  );
};

export default Paginate;