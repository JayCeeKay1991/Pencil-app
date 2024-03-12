export default interface Project {
    id: number
    projectName: string;
    projectOwner: string;
    description: string;
    startDate: string;
    endDate: string;
    thumbImage: string;
    artists: string[];
}