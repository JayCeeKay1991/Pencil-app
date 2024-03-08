// contextComponent.js
import { createContext, useState, useEffect, useContext, FC, PropsWithChildren } from "react";
import { fetchArtists, fetchProjects } from "../ApiService.ts";
// types
import Artist from "../types/Artist";
import Project from "../types/Project";
import { ArtistListContextType } from "../types/ArtistListContextType.ts";


const intialState = {
  fullArtists: [],
  fullProjects: [],
  setFullArtists:  () => [],
  setFullProjects:  () => [],
}

export const ArtistListContext = createContext<ArtistListContextType>(intialState);

export const ContextComponent = ( {children } : PropsWithChildren  ) => {
  const [fullArtists, setFullArtists] = useState<Artist[]>([]);
  const [fullProjects, setFullProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchAndSet() {
      try {
        const artistData = await fetchArtists();
        setFullArtists(artistData);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
      try {
        const projectData = await fetchProjects();
        setFullProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchAndSet();
  }, []);


  return (
    <ArtistListContext.Provider value={{ fullArtists, setFullArtists, fullProjects, setFullProjects }}>
      {children}
    </ArtistListContext.Provider>
  );
}

export const useMainContext = () => useContext(ArtistListContext);
