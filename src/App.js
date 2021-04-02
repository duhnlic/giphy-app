import { useState, useEffect } from "react";
import SearchForm from './Components/SearchForm/SearchForm';
import SearchResults from './Components/SearchResults/SearchResults';
import SearchHeader from './Components/SearchHeader/SearchHeader'
// import './App.css';


function App() {
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [resultQuantity, setResultQuantity] = useState('15');
  const [resultRating, setResultRating] = useState('G');
  const [resultLanguage, setResultLanguage] = useState('en');

  const searchOptions = {
    key: process.env.REACT_APP_GIPHY_KEY,
    api: 'https://api.giphy.com/v1/gifs',
    endpoint: '/search'
  };

  function getImages(searchString) {
    // const searchString = '';
    /* Build a URL from the searchOptions object */
    const url = `${searchOptions.api}${searchOptions.endpoint}?api_key=${searchOptions.key}&q=${searchString} &limit=${resultQuantity}&offset=${searchOptions.offset}&rating=${resultRating}&lang=${resultLanguage}`;
    
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

  function handleQuantityChange(event) {
    setResultQuantity(event.target.value);
  }

  function handleRatingChange(event) {
    setResultRating(event.target.value);
  }

  function handleLanguageChange(event) {
    setResultLanguage(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }


  return (
    <div className="App">
      <SearchHeader lastSearch={lastSearch} />
      <img src="https://media.giphy.com/media/0roItxZQWig1RrrUMR/giphy.gif" alt="Powered-By-Giphy" className="Giphy"/>
      <SearchForm
        handleLanguageChange={handleLanguageChange}
        handleRatingChange={handleRatingChange}
        handleQuantityChange={handleQuantityChange}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <SearchResults images={images}/>
    </div>
  );
}

export default App;
