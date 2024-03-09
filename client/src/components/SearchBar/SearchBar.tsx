import { useState, FC, ChangeEvent } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  filterSearched: (e: ChangeEvent<HTMLInputElement>) => void;
  setFilter: (arg: string) => void;
  filter: string;

}

export const SearchBar  = ({ filterSearched, filter, setFilter }: SearchBarProps) => {
  const [isPeopleActive, setIsPeopleActive] = useState(true);
  const [isSkillsActive, setIsSkillsActive] = useState(false);

  function changeFilterSkills() {
    setFilter("mainSkill");
    setIsPeopleActive(false);
    setIsSkillsActive(true);
  }

  function changeFilterPeople() {
    setFilter("people");
    setIsPeopleActive(true);
    setIsSkillsActive(false);
  }

  return (
    <div className="searchWrap">
      <div className="searchBar" data-testid="searchBar" >
        <input
          id="true"
          onChange={filterSearched}
          type="text"
          className="search"
          placeholder="Search..."
        />
        <button
          data-testid="peopleButton"
          onClick={changeFilterPeople}
          className={isPeopleActive ? "active" : ""}
        >
          People
        </button>
        <button
        data-testid="skillsButton"
          onClick={changeFilterSkills}
          className={isSkillsActive ? "active" : ""}
        >
          Skills
        </button>
      </div>
    </div>
  );
}
