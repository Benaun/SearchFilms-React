import FetchFilms from '../components/FetchFilms';
import { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState("");

  const handleSearchInput = (e) => {
    setValue(e.target.value);
  };

  return <>
    <FetchFilms search={value} />
  </>;
}