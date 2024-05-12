import { ReactNode } from 'react';

// Define the ProjectMeta type
export type ProjectMeta = {
  title: string;
  description: string;
  startAt: string;
  publishedAt: string;
  techs: string[];
  tags: string[];
  banner: string;
};

// Define the PostMeta type inheriting from ProjectMeta
export type PostMeta = ProjectMeta & {
  id: string;
  date: string;
};

// Define the PostContent type
export type PostContent = {
  meta: PostMeta;
  content: ReactNode;
};

// Define the Filetree type
export type Filetree = {
  tree: {
    path: string;
  }[];
};
