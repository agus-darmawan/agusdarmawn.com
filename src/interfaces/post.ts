import { ReactNode } from 'react';

export interface PostMeta {
  id: string;
  title: string;
  date: string;
  tags: Array<string>;
}

export interface PostContent {
  meta: PostMeta;
  content: ReactNode;
}

export interface Filetree {
  tree: [
    {
      path: string;
    },
  ];
}
