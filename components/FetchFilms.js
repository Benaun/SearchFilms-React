import { useState, useEffect } from "react";
import FilmsList from '../components/FilmsList';
import SearchInput from "./SearchInput";

export default function FetchFilms({ }) {
  const
    [films, setFilms] = useState([]),
    [searchValue, setSearchValue] = useState(''),
    [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=a2b07930&s=${searchValue}`);
        if (!response.ok) throw new Error('fetch ' + response.status);
        const data = await response.json();
        if (data.Search) {
          setFilms(data.Search);
          setError(null);
        } else {
          setFilms([]);
        }
      } catch (error) {
        setError(error)
      }
    }
    fetchFilms()
  }, [searchValue])

  if (error)
    return <div>Ошибка: {error.message}</div>;

  const handleSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <SearchInput searchValue={searchValue} onSearch={handleSearchValue} />
      <FilmsList films={films} />
    </div>
  );
}
