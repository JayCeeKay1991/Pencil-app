interface Work {
    description: string[],
    images: string,
    _id: string
}

export default interface Artist {
    _id: string;
    name: string;
    location: string,
    rate: string,
    skills: string[],
    mainSkill: string,
    profileImg: string,
    work: Work[]
}
