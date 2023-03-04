import React, { useState, useEffect } from "react";
import "./searchbar.css";
const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [gifs, setGifs] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchGifs = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${query}&offset=${offset}&limit=6`
    );
    const data = await response.json();
    setGifs(data.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGifs("search");
    setOffset(0);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setOffset(0);
  };

  const handlePrevClick = () => {
    if (offset >= 6) {
      setOffset(offset - 6);
      fetchGifs("search");
    }
  };

  const handleNextClick = () => {
    setOffset(offset + 6);
    fetchGifs("search");
  };

  useEffect(() => {
    if (query) {
      fetchGifs("search");
    }
  }, [query, offset]);

  return (
    <div className="search-container">
      <div className="search-area">
        <form onSubmit={handleSubmit}>
          <input
            className="search-form"
            type="text"
            placeholder="Search GIFs"
            value={query}
            onChange={handleInputChange}
          />
          <button className="btn-search" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="gif-container">
        {gifs.map((gif) => (
          <div style={{ margin: "1rem" }}>
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className="page-btn"
          onClick={handlePrevClick}
          disabled={offset < 6}
        >
          Previous
        </button>
        <div className="page-number">{offset / 6 + 1}</div>
        <div className="page-number page-number-dis">{offset / 6 + 2}</div>
        <div className="page-number page-number-dis">{offset / 6 + 3}</div>
        <button
          className="page-btn"
          onClick={handleNextClick}
          disabled={gifs.length < 6}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
