import Artist from "./Artist";
import Project from "./Project";
import User from "./User";
import { Dispatch, SetStateAction } from "react";

export type ArtistListContextType = {
    user: User | null;
    fullArtists: Artist[];
    fullProjects: Project[];
    setFullArtists:  Dispatch<SetStateAction<Artist[]>>;
    setFullProjects:  Dispatch<SetStateAction<Project[]>>;
    setUser:  Dispatch<SetStateAction<User | null>>;
}