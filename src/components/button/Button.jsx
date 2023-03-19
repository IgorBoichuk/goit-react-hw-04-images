import style from './style.module.css';

export const LoadMoreBtn = ({ onLoadMoreHandler, isLoadingImg }) => {
  return (
    <div className={style.btnwrapper}>
      {isLoadingImg ? (
        <button
          type="button"
          className={style.loadmorebtn}
          onClick={onLoadMoreHandler}
        >
          Load more
        </button>
      ) : null}
    </div>
  );
};
