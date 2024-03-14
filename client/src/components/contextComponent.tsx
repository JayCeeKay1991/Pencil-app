// contextComponent.js
import { createContext, useState, useEffect, useContext, PropsWithChildren } from "react";
import { getAllArtists } from "../services/ArtistApi.ts";
import { getAllProjects } from "../services/ProjectApi.ts";
// types
import Artist from "../types/Artist";
import Project from "../types/Project";
import { ArtistListContextType } from "../types/ArtistListContextType.ts";
import User from "../types/User.ts";

const initialUserState: User = {
  id: 0,
  userName: "",
  email: "", 
  password: ""
}

const initialState:ArtistListContextType = {
  user: initialUserState,
  fullArtists: [],
  fullProjects: [],
  setFullArtists: () => [],
  setFullProjects: () => [],
  setUser: () => initialUserState,
}

export const ArtistListContext = createContext<ArtistListContextType>(initialState);

export const ContextComponent = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User>(initialUserState);
  const [fullArtists, setFullArtists] = useState<Artist[]>([]);
  const [fullProjects, setFullProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchAndSet() {
      try {
        const artistData = await getAllArtists();
        setFullArtists(artistData);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
      try {
        const projectData = await getAllProjects();
        setFullProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchAndSet();
  }, []);


  return (
    <ArtistListContext.Provider value={{ user, setUser, fullArtists, setFullArtists, fullProjects, setFullProjects }}>
      {children}
    </ArtistListContext.Provider>
  );
}

export const useMainContext = () => useContext(ArtistListContext);
