import { updateLikes, updateDislikes } from "../../services/LikesApi.js";
import { useState, useEffect } from "react";
import { useMainContext } from "../contextComponent.js";
import "./ProjectDetailsItem.css";
import { PiThumbsUpLight } from "react-icons/pi";
import { PiThumbsDownLight } from "react-icons/pi";
import Artist from "../../types/Artist.js";
import ArtistLikes from "../../types/ArtistLikes.js";

interface ProjectDetailsItemProps {
  artist:ArtistLikes;
}


export const ProjectDetailsItem = ({ artist }: ProjectDetailsItemProps): React.JSX.Element => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const { fullArtists, setFullArtists } = useMainContext();

  useEffect(() => {
    async function fetchAndSet() {
      setLikes(artist.numberOfLikes);
      setDislikes(artist.numberOfDislikes);
    }
    fetchAndSet();
  }, []);

  async function updateLikedArtist(id:string) {
    await updateLikes(id);
    setLikes((prevLikes) => prevLikes + 1);
  }

  async function updateDislikedArtist(id:string) {
    await updateDislikes(id);
    setDislikes((prevDislikes) => prevDislikes + 1);
  }

  function handleDislikes() {
    updateDislikedArtist(artist._id);
  }

  function handleLikes() {
    updateLikedArtist(artist._id);
  }

  function getArtistData<T extends keyof Artist> (artist:string, property:T ) {
    const searchedArtist = fullArtists.find((fullArtist: Artist) => fullArtist._id === artist);
    if (!searchedArtist) return 'Artist Not Found';
    else {
      if (property in searchedArtist) return searchedArtist[property];
      else return 'Property not found';
    }
  }

  return (
    <div className="projectItemWrap">
      <div className="check">
        <div className="img-crop">
          <img src={getArtistData(artist.artist, "profileImg")}></img>
        </div>
        <div className="artist-info">
          <p>{getArtistData(artist.artist, "name")}</p>
          <p>{getArtistData(artist.artist, "mainSkill")}</p>
        </div>
      </div>

      <div className="middle">
        <p className="rated"> {getArtistData(artist.artist, "rate")}</p>
      </div>

      <div className="votes">

          <button onClick={handleLikes} className="like">
            <PiThumbsUpLight style={{ color: "black" }} size={25} />
          <p>{likes}</p>
          </button>

        <hr />

          <button onClick={handleDislikes} className="like">
            <PiThumbsDownLight style={{ color: "black" }} size={25} />
          <p>{dislikes}</p>
          </button>
      </div>
    </div>
  );
}
