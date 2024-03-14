import { useMainContext } from '../contextComponent';
import './ArtistComments.css';
import { PiArrowRight } from 'react-icons/pi';
import Comment from '../../types/Comment';
import Artist from '../../types/Artist';
import Project from '../../types/Project';
import { addComment } from '../../services/CommentApi';
import { ChangeEvent, useState } from 'react';
import { MouseEvent } from 'react';

interface ArtistCommentProps {
  comments: Comment[]
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>
  artist: Artist
  project: Project
}

export const ArtistComments = ({comments, artist, project, setComments}: ArtistCommentProps): React.JSX.Element => {
  const [comment, setComment] = useState("")
  const { user } = useMainContext();

  const handleCommentChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(comment)
    setComment(e.target.value)
  }

  const  handleSubmitComment = async (e: MouseEvent<HTMLButtonElement>)  => {
    e.preventDefault()
    if(comment !== "") {
      const commentData = {
        content: comment,
        user: user
      }
      const newComment = await addComment(artist.id, project.id, commentData);
      setComments([...comments, newComment])
      setComment("");
    }
  }

  return (
    <div className="commentWrap">
      <h5 className='commentHeading' >COMMENTS</h5>
      <ol className="commentList" >
        {comments.map(comment => {
              return <li className={`commentItem ${comment.author === user?.id ? 'myCommentItem' : ''}`} >{comment.content}</li>
          })}
        <li className='commentItem myCommentItem' >My comment</li>
        <li className='commentItem' >Someone else's comment</li>
      </ol>
      <form className='commentForm' >
        <input type="text" placeholder="Comment on this pick.." onChange={handleCommentChange} value={comment}></input>
        <button type="button" onClick={handleSubmitComment} >
          <PiArrowRight size={25} />
        </button>
      </form>
    </div>
  )
}