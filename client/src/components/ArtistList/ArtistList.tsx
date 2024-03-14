import { useState, useEffect, ChangeEvent } from "react";
import { ArtistListItem } from "../ArtistListItem/ArtistListItem.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import { SearchBar } from "../SearchBar/SearchBar.js";
import { useMainContext } from "../contextComponent.js";
import { Loading } from "../Loading/Loading.js";
import "./ArtistList.css";
import Artist from "../../types/Artist";


export const ArtistList = () => {
  const { fullArtists } = useMainContext();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [filter, setFilter] = useState<string>("name");
  const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
     const delay = setTimeout(() => {
       setArtists(fullArtists);
       setIsLoading(false);
     }, 1500);

     return () => clearTimeout(delay);
   }, [fullArtists]);

  function filterSearched(e: ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue) {
      setArtists(fullArtists);
    } else {
      const searchResult: Artist[] = artists.filter((artist) => {
        for (const value of Object.values(artist)) {
          if (value.toString().toLowerCase().startsWith(searchValue))
          return artist;
        }
      })
     setArtists(searchResult);
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
              <div key={artist.id}>
                <ArtistListItem artist={artist} />
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
