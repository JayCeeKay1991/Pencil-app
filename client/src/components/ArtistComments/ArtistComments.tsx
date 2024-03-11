import './ArtistComments.css';
import { PiArrowRight } from 'react-icons/pi';


export const ArtistComments = (): React.JSX.Element => {

  return (
    <div className="commentWrap">
      <h5 className='commentHeading' >COMMENTS</h5>
      <ol className="commentList" >
        {/* mapping through the comments and creating a list item for each one */}
        <li className='commentItem' >Someone's comment</li>
        <li className='commentItem' >Someone's comment with some more text just to see the line break</li>
        <li className='commentItem myCommentItem' >My comment</li>
        <li className='commentItem' >Someone's comment</li>
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