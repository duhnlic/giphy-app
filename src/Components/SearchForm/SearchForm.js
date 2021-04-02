import { SearchIcon } from '../../shared/AppIcons';
import SearchLimit from '../SearchLimit/SearchLimit';
import SearchRating from '../SearchRating/SearchRating';
import SearchLanguage from '../SearchLanguage/SearchLanguage';

export default function SearchForm({ handleSubmit, handleChange, searchString, handleQuantityChange, handleRatingChange, handleLanguageChange }) {
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <input
        placeholder="Search"
        type="text"
        name="searchString"
        required
        onChange={handleChange}
        value={searchString}
      />
      <SearchLimit handleQuantityChange={handleQuantityChange}/>
      <SearchRating handleRatingChange={handleRatingChange}/>
      <SearchLanguage handleLanguageChange={handleLanguageChange}/>
      <button type="submit">
        <SearchIcon height="1.5rem" width="2rem" />
      </button>
    </form>
  );
}