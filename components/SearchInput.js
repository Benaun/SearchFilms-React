export default function SearchInput({ searchValue, onSearch }) {

  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      value={searchValue}
      onChange={handleInputChange}
    />
  )
}
