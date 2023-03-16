import React, { useState } from "react";
import axios from "axios";

const SearchForm = () => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [places, setPlaces] = useState([]);

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get("/v2/local/search/keyword.json", {
      params: {
        query: keyword,
        x: location.split(",")[0],
        y: location.split(",")[1],
        radius: 2000,
      },
      headers: {
        Authorization: `KakaoAK 43d53fcfdfd5ef7bfbb642860935a339`,
      },
    });

    setPlaces(response.data.documents);
    console.log("res:", response.data.documents);
  };
  // console.log("res:", response.data.documents);
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Keyword:
        <input type="text" value={keyword} onChange={handleKeywordChange} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={handleLocationChange} />
      </label>
      <button type="submit">Search</button>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            {place.place_name} ({place.category_name}): {place.address_name}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SearchForm;
