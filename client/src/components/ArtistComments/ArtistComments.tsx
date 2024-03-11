import './ArtistComments.css';
import { PiArrowRight } from 'react-icons/pi';


export const ArtistComments = (): React.JSX.Element => {

  return (
    <div className="commentWrap">
      <ol className="commentList" >
        {/* mapping through the comments and creating a list item for each one */}
        <li className='commentItem' >individual comment</li>
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