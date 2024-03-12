import LocationType from "./Location";
import Skill from "./Skill";
import Work from "./Work";


export default interface Artist {
    id: number;
    name: string;
    location: LocationType,
    skills: Skill[],
    mainSkill: Skill,
    profileImg: string,
    rateAmount: number,
    rateType: string,
    rateCurrency: string,
    mainSkillId: number
    Works: Work[],
}

