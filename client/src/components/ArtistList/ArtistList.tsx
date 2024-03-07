import { useState, useEffect } from "react";
import { ArtistListItem } from "../ArtistListItem/ArtistListItem.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import { SearchBar } from "../SearchBar/SearchBar.js";
import { useMainContext } from "../contextComponent.js";
import { Loading } from "../Loading/Loading.js";
import "./ArtistList.css";


export function ArtistList() {
  const { fullArtists, setFullArtists } = useMainContext();
  const [artists, setArtists] = useState([]);
  const [filter, setFilter] = useState("name");
  const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
     const delay = setTimeout(() => {
       setArtists(fullArtists);
       setIsLoading(false);
     }, 1500);

     return () => clearTimeout(delay);
   }, [fullArtists]);

  function filterSearched(e) {
    const searchValue = e.target.value.toLowerCase();

    if (!searchValue) {
      setArtists(fullArtists);
    } else {
      const searched = artists.filter((artist) =>
        artist[filter].toLowerCase().startsWith(searchValue)
      );
     setArtists(searched);
    }
  }

  return (
    <div className="wrapper">
      <PageTitle page="Collection" />
      <SearchBar
        filterSearched={filterSearched}
        filter={filter}
        setFilter={setFilter}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="list">
          {artists.map((artist) => {
            return (
              <div key={artist._id}>
                <ArtistListItem artist={artist} />
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
