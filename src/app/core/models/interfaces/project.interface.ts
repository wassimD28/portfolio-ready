import { UsedTechnology } from "./usedTechnology.interface";

export interface Project{
  title: string;
  description: string;
  images: string[];
  usedTechnology : UsedTechnology[];
  fontGitHubLink?: string;
  backGitHubLink?: string;
  fullGitHubLink?: string;
}
