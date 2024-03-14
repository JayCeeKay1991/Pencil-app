import { addLike, addDislike, getLikes, getDislikes } from "../../services/LikesApi.js";
import { useState, useEffect } from "react";
import "./ProjectDetailsItem.css";
import { PiThumbsDownLight, PiThumbsUpLight } from "react-icons/pi";
import { GoCommentDiscussion } from "react-icons/go";
import { ArtistComments } from "../ArtistComments/ArtistComments.js";
import Artist from "../../types/Artist.js";
import LikeDislike from "../../types/LikeDislike.js";
import Comment from "../../types/Comment.js";
import Project from "../../types/Project.js";
import { getComments } from "../../services/CommentApi.js";
import { useMainContext } from "../contextComponent.js";


interface ProjectDetailsItemProps {
  artist:Artist,
  project:Project
}

const initialLikeDislikeState = {
  id: 0,
  amount: 0,
  createdAt: new Date(),
  updatedAt: new Date()
}


export const ProjectDetailsItem = ({ artist, project }: ProjectDetailsItemProps): React.JSX.Element => {
  const [like, setLike] = useState<LikeDislike>();
  const [dislike, setDislike] = useState<LikeDislike>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState<boolean>(false);

  useEffect(() => {
    async function fetchAndSet() {
      const likeForArtist = await getLikes(project.id, artist.id);
      const dislikeForArtist = await getDislikes(project.id, artist.id);
      const commentsForArtist = await getComments(project.id, artist.id);

      if (!likeForArtist) setLike(initialLikeDislikeState);
      else setLike(likeForArtist);

      if (!dislikeForArtist) setDislike(initialLikeDislikeState);
      else setDislike(dislikeForArtist);

      setComments(commentsForArtist);
    }
    fetchAndSet();
  }, []);



  async function updateLikedArtist(projectId:number, artistId:number) {
    const { user } = useMainContext();
    const updatedLike = await addLike(projectId, artistId, user!.id);
    setLike(updatedLike);
  }

  async function updateDislikedArtist(projectId:number, artistId:number) {
    const updatedDislike = await addDislike(projectId, artistId);
    setDislike(updatedDislike);
  }

  function handleLikes() {
    updateLikedArtist(project.id, artist.id);
  }

  function handleDislikes() {
    updateDislikedArtist(project.id, artist.id);
  }

  function toggleComments() {
    setShowComments(!showComments);
  }

  return (
    <div className="projectItemWithComments" >
    <div className="projectItemWrap">
      <div className="check">
        <div className="img-crop">
          <img src={artist.profileImg}></img>
        </div>
        <div className="artist-info">
          <p>{artist.name}</p>
          <p>{artist.mainSkill.name}</p>
        </div>
      </div>

      <div className="middle">
        <p className="rated"> {`${artist.rateCurrency} ${artist.rateAmount} ${artist.rateType}`}</p>
      </div>

      <div className="votes">

          <button onClick={handleLikes} className="like">
            <PiThumbsUpLight style={{ color: "black" }} size={25} />
          <p>{like?.amount || 0}</p>
          </button>

        <hr />
          <button onClick={handleDislikes} className="like">
            <PiThumbsDownLight style={{ color: "black" }} size={25} />
          <p>{dislike?.amount || 0}</p>
          </button>
          <button onClick={toggleComments} className="like comments">
            <GoCommentDiscussion  style={{ color: "black" }} size={25} />
            <p>{comments?.length || 0}</p>
          </button>
      </div>
    </div>
    {
      showComments ? <ArtistComments comments={comments} ></ArtistComments> : <></>
    }
      </div>
  );
}
