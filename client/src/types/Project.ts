import Artist from "./Artist";
export default interface Project {
    projectName: string;
    projectOwner: string;
    description: string;
    startDate: Date;
    endDate: Date;
    thumbImage: string;
    artists: Artist[];
}