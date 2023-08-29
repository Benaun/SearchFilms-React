import css from './SearchForm.module.css';

export default function SearchInput({ searchValue, onSearch }) {

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      className={css.search__input}
      type="text"
      value={searchValue}
      onChange={handleInputChange}
      placeholder="Введите название фильма"
    />
  )
}
