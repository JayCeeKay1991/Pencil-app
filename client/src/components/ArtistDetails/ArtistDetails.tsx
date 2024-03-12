import "./ArtistDetails.css";
import { useParams } from "react-router-dom";
import { useMainContext } from "../contextComponent.js";
import { PageTitle } from "../PageTitle/pageTitle.js";
import { useState, useEffect} from "react";
import { DropDownListSecond } from "../DropDownListSecond/DropDownListSecond.js";
import { Loading } from "../Loading/Loading.js";
// types
import Artist from "../../types/Artist";

const initialArtistState =  {
  id: 0,
  name: "",
  location: "",
  rateAmount: 0,
  rateCurrency: "",
  rateType: "",
  skills: [],
  mainSkill: {},
  mainSkillId: 0,
  profileImg: "",
  work: []
}

interface ArtistDetailsProps {
  onSelectProject: () => void;
}


export const ArtistDetails  = ({ onSelectProject }: ArtistDetailsProps) => {
  const { fullArtists } = useMainContext();
  const [chosenArtist, setChosenArtist] = useState<Artist>(initialArtistState);
  const [active, setActive] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();


  useEffect(() => {
      const delay = setTimeout(() => {
        if (id) {
          const artist = fullArtists.find((fullArtist: Artist) => fullArtist.id === +id);
          if (artist) setChosenArtist(artist);
        }
        setIsLoading(false);
      }, 600);
    return () => clearTimeout(delay);
    }, [fullArtists]);

  return (
    <div className="wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle page="Artists" />

          <div className="artist-content">
            <div className="artist-profile-details" data-testid="artist-profile-details" >
              <div className="bg-img-crop">
                <img
                  src={chosenArtist.profileImg}
                  className="artist-profile-image"
                />
              </div>
              <div className="narrow">
                <h3>{chosenArtist.name}</h3>
                <DropDownListSecond onSelectProject={onSelectProject}/>
              </div>

              <div className="artist-infos">
                <div className="space">
                  <p>RATE</p>
                  <div className="border">
                    <p>{chosenArtist.rateAmount}</p>
                  </div>
                </div>
                <div className="space">
                  <p>SKILLS</p>
                  <ul>
                    {chosenArtist.skills &&
                      chosenArtist.skills.map((skill, index) => (
                        <li key={index}>{skill.name}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="work">
              <div className="work-links">
                <a className={active ? "active-link" : ""}>Work</a>
                <a className={active ? "" : "active-link"}>Experience</a>
              </div>
              <hr />
              <ul>
                {chosenArtist.work &&
                  chosenArtist.work.map((item, i) => (
                    <li key={i}>
                      <article className="story">
                        <div className="story-img-crop">
                          <img src={item.image}></img>
                        </div>
                        <div className="artistProjectInfo">
                          <p>PROJECT</p>
                          <p>{item.description}</p>
                        </div>
                      </article>
                      <hr />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
