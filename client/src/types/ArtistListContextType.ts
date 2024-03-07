import Artist from "./Artist";
import Project from "./Project";
import { Dispatch, SetStateAction } from "react";

export type ArtistListContextType = {
    fullArtists: Artist[];
    fullProjects: Project[];
    setFullArtists:  Dispatch<SetStateAction<Artist[]>>;
    setFullProjects:  Dispatch<SetStateAction<Project[]>>;
}