interface Work {
    description: string[],
    images: string[]
}

export default interface Artist {
    name: string;
    location: string,
    rate: string,
    skills: string[],
    mainSkill: string,
    profileImg: string,
    work: Work[]
}
