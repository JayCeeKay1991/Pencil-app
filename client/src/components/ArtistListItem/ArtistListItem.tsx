import "./ArtistListItem.css";
import { addArtistToProject } from "../../services/ProjectApi.js";
import { DropDownList } from "../DropDownList/DropDownList.js";
import { Link } from "react-router-dom";
import Artist from "../../types/Artist";

interface ArtistListItemProps {
  artist: Artist;
}

export const ArtistListItem = ({artist}: ArtistListItemProps) => {

  //Break firstName lastName
  function breakName(name: string) {
    let splitName = name.split(" ");
    return splitName;
  }

  // Add artist
  async function handleClick(projectId: string) {
     await addArtistToProject(artist, projectId);
   }

  return (
    <div className="artistContainer">
      <div className="hover">
        <DropDownList onSelectProject={handleClick} />
          <Link to={`/artistDetails/${artist.id}`}><div className="clickable"></div></Link>
      </div>

      <div className="additional-info">
        <p>{artist.rateCurrency}{artist.rateAmount}{artist.rateType}</p>
      </div>

      <div className="artistTop">
        <div className="profile-details">
          <div className="profile-crop">
            <img src={artist.profileImg} className="profile-Img"></img>
          </div>
          <h4 className="name">
            {breakName(artist.name).map((namePart, index) => (
              <span key={index}>
                {namePart}
                <br />
              </span>
            ))}
          </h4>
        </div>

        <div className="fill">
          <li className="main-skill">{artist.mainSkill.name}</li>
        </div>
        {/* <ul className="skills-list">
            {artist.skills.map((skill, i) => {
              return (
                <li key={i}>
                  <p>{skill}</p>
                </li>
              );
            })}
          </ul> */}
      </div>

      <div className="artistBottom">
        <div className="artist-thumb-crop">
          <img className="artist-thumb-img" src={artist.Works[0]?.image} />
        </div>
      </div>
    </div>
  );
}
