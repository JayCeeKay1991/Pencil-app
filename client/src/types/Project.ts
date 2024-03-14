import Artist from "./Artist";

export default interface Project {
    id: number
    name: string;
    owner: string;
    description: string;
    startDate: Date;
    endDate: Date;
    thumbImage: string;
    artists: Artist[];
}