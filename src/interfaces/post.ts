import { ReactNode } from 'react';

export interface ProjectMeta {
  title: string;
  description: string;
  startAt: string;
  publishedAt: string;
  techs: string[];
  tags: string[];
  banner: string;
}

export interface PostMeta extends ProjectMeta {
  id: string;
  date: string;
}

export interface PostContent {
  meta: PostMeta;
  content: ReactNode;
}

export interface Filetree {
  tree: {
    path: string;
  }[];
}
