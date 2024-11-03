import { UsedTechnology } from "./usedTechnology.interface";

export interface Project{
  title: string;
  description: string;
  image: string;
  usedTechnology : UsedTechnology[];
  fontGitHubLink?: string;
  backGitHubLink?: string;
  fullGitHubLink?: string;
}
