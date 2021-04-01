import { useState, useEffect } from "react";
import SearchForm from './Components/SearchForm/SearchForm';
import SearchResults from './Components/SearchResults/SearchResults';
import SearchHeader from './Components/SearchHeader/SearchHeader'
// import './App.css';


function App() {
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('gif');
  const [lastSearch, setLastSearch] = useState('');
  
  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    limit: 25,
    rating: 'G',
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };

  function getImages(searchString) {
    // const searchString = '';
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${searchOptions.limit}&offset=${searchOptions.offset}&rating=${searchOptions.rating}&lang=en`;
    
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setImages(response.data);
      // Set the lastSearch to the searchString value
      setLastSearch(searchString);
      // Set the searchString in state to an empty string
      setSearchString('');
    })
    .catch(console.error);
  }
  
  useEffect(() => {
    
    getImages();
  },[]);
  
  function handleChange(event) {
    setSearchString(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }


  return (
    <div className="App">
      <SearchHeader lastSearch={lastSearch} />
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults images={images}/>
    </div>
  );
}

export default App;
