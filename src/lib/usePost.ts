import axios from 'axios';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';

import { Filetree, PostContent, PostMeta } from '@/interfaces/post';

async function fetchPostContent(fileName: string): Promise<string | undefined> {
  try {
    const response = await axios.get(
      `https://raw.githubusercontent.com/agus-darmawan/blog-project-snippet-contents/main/${fileName}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    if (!response.data) return undefined;
    const rawMDX = response.data;
    if (rawMDX === '404: Not Found') return undefined;
    return rawMDX;
  } catch (error) {
    return undefined;
  }
}

async function parseMDXContent(
  rawMDX: string,
): Promise<PostContent | undefined> {
  try {
    const { frontmatter, content } = await compileMDX<{
      title: string;
      date: string;
      tags: string[];
      description: string;
      startAt: string;
      publishedAt: string;
      techs: string[];
      banner: string;
    }>({
      source: rawMDX,
      components: {},
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          ],
        },
      },
    });

    const id = __filename.replace(/\.mdx$/, '');
    const blogPostObj: PostContent = {
      meta: {
        id,
        title: frontmatter.title,
        tags: frontmatter.tags,
        description: frontmatter.description,
        startAt: frontmatter.startAt,
        date: frontmatter.date ?? frontmatter.publishedAt,
        publishedAt: frontmatter.publishedAt,
        techs: frontmatter.techs,
        banner: frontmatter.banner,
      },
      content,
    };
    return blogPostObj;
  } catch (error) {
    return undefined;
  }
}

export async function getPostByName(
  fileName: string,
): Promise<PostContent | undefined> {
  const rawMDX = await fetchPostContent(fileName);
  if (!rawMDX) return undefined;
  return await parseMDXContent(rawMDX);
}

export async function getPostsMeta(
  pathOfPost: string,
): Promise<PostMeta[] | undefined> {
  try {
    const res = await fetch(
      'https://api.github.com/repos/agus-darmawan/blog-project-snippet-contents/git/trees/main?recursive=1',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    if (!res.ok) return undefined;

    const repoFiletree: Filetree = await res.json();
    const filesArray = repoFiletree.tree
      .map((obj) => obj.path)
      .filter((path) => path.endsWith('.mdx') && path.startsWith(pathOfPost));

    const posts: PostMeta[] = [];

    for (const file of filesArray) {
      const post = await getPostByName(file);
      if (post) {
        const { meta } = post;
        posts.push(meta);
      }
    }

    return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    return undefined;
  }
}
