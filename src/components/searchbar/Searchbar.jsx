import { Component } from 'react';
import style from './style.module.css';

export class Searchbar extends Component {
  state = {
    queryPictures: '',
  };

  handleQueryChange = event => {
    this.setState({ queryPictures: event.currentTarget.value.toLowerCase() });
  };

  handleQuerySubmit = event => {
    event.preventDefault();
    if (this.state.queryPictures.trim() === '') {
      alert('Enter the query');
      return;
    }
    this.props.onSubmit(this.state.queryPictures);
    this.setState({ queryPictures: '' });
  };

  render() {
    return (
      <header className={style.searchbar}>
        <form className={style.form} onSubmit={this.handleQuerySubmit}>
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
            value={this.state.queryPictures}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}
