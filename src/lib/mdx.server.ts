import axios from 'axios';
import { compileMDX } from 'next-mdx-remote/rsc';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';

import MDXComponents from '@/components/organisms/MDXComponents';

import { Frontmatter } from '@/interfaces/frontmatter';
import { Filetree, PostContent, PostMeta, PostType } from '@/interfaces/post';

const GITHUB_REPO = process.env.GITHUB_REPO;
const GITHUB_API_URL = `https://api.github.com/repos/${GITHUB_REPO}`;
const RAW_CONTENT_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/main`;

async function getRawFileBySlug(slug: string): Promise<string | undefined> {
  try {
    const response = await axios.get(`${RAW_CONTENT_URL}/${slug}.mdx`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: '0',
      },
    });

    if (response.data && response.data !== '404: Not Found') {
      return response.data;
    }
    return undefined;
  } catch (error) {
    return undefined;
  }
}

async function transformMDXContent(
  rawFile: string,
  slug: string,
): Promise<PostContent | undefined> {
  try {
    const { frontmatter, content } = await compileMDX<Frontmatter>({
      source: rawFile,
      components: { ...MDXComponents },
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'wrap',
                properties: {
                  className: ['hash-anchor'],
                },
              },
            ],
            rehypeHighlight,
          ],
        },
      },
    });
    return {
      meta: {
        slug,
        readingTime: readingTime(String(content)).text,
        frontmatter,
      },
      content,
    };
  } catch (error) {
    return undefined;
  }
}

export async function getFileBySlug(
  slug: string,
): Promise<PostContent | undefined> {
  const rawFile: string | undefined = await getRawFileBySlug(slug);
  if (!rawFile) return undefined;
  return await transformMDXContent(rawFile, slug);
}

export async function getPostFrontmatter(
  slug: string,
): Promise<PostMeta | undefined> {
  const rawFile: string | undefined = await getRawFileBySlug(slug);
  if (!rawFile) return undefined;

  try {
    const { content, frontmatter } = await compileMDX<Frontmatter>({
      source: rawFile,
      components: {},
      options: {
        parseFrontmatter: true,
      },
    });

    return {
      slug,
      readingTime: readingTime(String(content)).text,
      frontmatter,
    };
  } catch (error) {
    return undefined;
  }
}

export async function getAllPostFrontmatter(
  type: PostType,
): Promise<Array<PostMeta> | undefined> {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/git/trees/main?recursive=1`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          'X-GitHub-Api-Version': '2022-11-28',
        },
      },
    );

    if (response.status !== 200) return undefined;

    const repositoryTree: Filetree = response.data;
    const mdxFiles = repositoryTree.tree
      .filter((file) => file.path.endsWith('.mdx') && file.path.includes(type))
      .map((file) => file.path);

    const postsMetadata: PostMeta[] = [];

    for (const filePath of mdxFiles) {
      const slug = filePath.replace('.mdx', '');
      const frontmatter = await getPostFrontmatter(slug);
      if (frontmatter) {
        postsMetadata.push(frontmatter);
      }
    }

    return postsMetadata.sort((a, b) =>
      a.frontmatter.date < b.frontmatter.date ? 1 : -1,
    );
  } catch (error) {
    return undefined;
  }
}
