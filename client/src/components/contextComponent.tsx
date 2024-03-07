// contextComponent.js
import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchArtists, fetchProjects } from "../ApiService.js";

const ArtistListContext = createContext({});

export function ContextComponent({ children }) {
  const [fullArtists, setFullArtists] = useState([]);
  const [fullProjects, setFullProjects] = useState([]);

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
