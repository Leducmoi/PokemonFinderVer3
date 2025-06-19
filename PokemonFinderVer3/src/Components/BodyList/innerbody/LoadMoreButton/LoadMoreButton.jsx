import { memo } from "react";
function LoadMoreButton({ onClick }) {
  return (
    <div className="load-more-wrapper">
      <button className="btn-loadMore" onClick={onClick}>
        Load More
      </button>
    </div>
  );
}

export default memo(LoadMoreButton);