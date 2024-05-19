'use client';
import { FC, useEffect, useState } from 'react';

import useScrollSpy from '@/hooks/useScroollspy';

import { TOC } from '@/components';
import { HeadingTOC } from '@/components/molecules/TOC';

const ClientTOC: FC<{ content: string }> = ({ content }) => {
  const [toc, setToc] = useState<Array<HeadingTOC>>([]);
  const activeSection = useScrollSpy();

  useEffect(() => {
    const headings = document.querySelectorAll('.mdx h1, .mdx h2, .mdx h3');
    const headingArr: Array<HeadingTOC> = [];
    headings.forEach((heading) => {
      const id = heading.id;
      const level = +heading.tagName.replace('H', '');
      const text = heading.textContent ?? '';
      headingArr.push({ id, level, text });
    });

    setToc(headingArr);
  }, [content]);

  const minLevel = toc.reduce(
    (min, item) => (item.level < min ? item.level : min),
    10,
  );

  return (
    <TOC
      contents={toc}
      activeHeadings={activeSection ? activeSection : ''}
      minLevel={minLevel}
    />
  );
};

export default ClientTOC;
