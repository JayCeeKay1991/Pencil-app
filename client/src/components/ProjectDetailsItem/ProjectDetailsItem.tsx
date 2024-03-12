import { updateLikes, updateDislikes } from "../../services/LikesApi.js";
import { useState, useEffect } from "react";
import { useMainContext } from "../contextComponent.js";
import "./ProjectDetailsItem.css";
import { PiThumbsDownLight, PiThumbsUpLight } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { ArtistComments } from "../ArtistComments/ArtistComments.js";
import Artist from "../../types/Artist.js";
import LikeDislike from "../../types/LikeDislike.js";
import Comment from "../../types/Comment.js";


interface ProjectDetailsItemProps {
  artist:Artist;
}


export const ProjectDetailsItem = ({ artist }: ProjectDetailsItemProps): React.JSX.Element => {
  const [likes, setLikes] = useState<LikeDislike>();
  const [dislikes, setDislikes] = useState<LikeDislike>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState<boolean>(false);
  const { fullArtists, setFullArtists } = useMainContext();

  useEffect(() => {
    async function fetchAndSet() {
      setLikes(likes.amount);
      setDislikes(dislikes.amount);
      setComments(commentsByArtist)
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

  function toggleComments() {
    setShowComments(!showComments);
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
    <div className="projectItemWithComments" >
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
          <button onClick={toggleComments} className="like comments">
            <GoCommentDiscussion  style={{ color: "black" }} size={25} />
            <p>{artist.comments !== undefined ? artist.comments.length : 0}</p>
          </button>
      </div>
    </div>
    {
      showComments ? <ArtistComments comments={artist.comments} ></ArtistComments> : <></>
    }
      </div>
  );
}
