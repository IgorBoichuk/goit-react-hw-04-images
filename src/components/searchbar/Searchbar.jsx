import { useState } from 'react';
import style from './style.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [queryPictures, setQueryPictures] = useState('');

  const handleQueryChange = event => {
    setQueryPictures(event.currentTarget.value.toLowerCase());
  };

  const handleQuerySubmit = event => {
    event.preventDefault();
    if (queryPictures.trim() === '') {
      alert('Enter the query');
      return;
    }
    onSubmit(queryPictures);
    setQueryPictures('');
  };

  return (
    <header className={style.searchbar}>
      <form className={style.form} onSubmit={handleQuerySubmit}>
        <button type="submit" className={style.searchbutton}>
          <span className={style.textbutton}></span>
        </button>

        <input
          className={style.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="inputValue"
          value={queryPictures}
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
};
