import { useMainContext } from '../contextComponent';
import './ArtistComments.css';
import { PiArrowRight } from 'react-icons/pi';
import Comment from '../../types/Comment';


interface ArtistCommentProps {
  comments: Comment[]
}

export const ArtistComments = ({comments}: ArtistCommentProps): React.JSX.Element => {
  const { user } = useMainContext();

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
        <input type="text" placeholder="Comment on this pick.."></input>
        <button type="submit" >
          <PiArrowRight size={25} />
        </button>
      </form>
    </div>
  )
}