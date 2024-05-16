import { ReactNode } from 'react';

import { Frontmatter } from './frontmatter';

export type PostType = 'blogs' | 'projects' | 'snippets';

export interface PostMeta {
  slug: string;
  readingTime: string;
  frontmatter: Frontmatter;
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
