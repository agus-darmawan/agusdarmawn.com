'use client';

import { ComponentPropsWithoutRef, FC, useEffect, useRef } from 'react';

import { TOCLink } from '@/components';

export interface HeadingTOC extends ComponentPropsWithoutRef<'a'> {
  level: number;
  id: string;
  text: string;
}

interface ITOCProps {
  contents: Array<HeadingTOC>;
  activeHeadings: string;
  minLevel: number;
}

const TOC: FC<ITOCProps> = ({ contents, activeHeadings, minLevel }) => {
  const lastPosition = useRef<number>(0);

  useEffect(() => {
    const container = document.getElementById('toc-container');
    const activeLink = document.getElementById(`link-${activeHeadings}`);

    if (container && activeLink) {
      // Get container properties
      const cTop = container.scrollTop;
      const cBottom = cTop + container.clientHeight;

      // Get activeLink properties
      const lTop = activeLink.offsetTop - container.offsetTop;
      const lBottom = lTop + activeLink.clientHeight;

      // Check if in view
      const isTotal = lTop >= cTop && lBottom <= cBottom;

      const isScrollingUp = lastPosition.current > window.scrollY;
      lastPosition.current = window.scrollY;

      if (!isTotal) {
        const offset = 25;
        const top = isScrollingUp
          ? lTop - container.clientHeight + offset
          : lTop - offset;

        container.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [activeHeadings]);
  return (
    <section className='w-full' id='toc-container'>
      <h3 className='text-lg mb-2 '>Table of Contents</h3>
      <ul>
        {contents.map(({ level, text, id }) => (
          <li key={id} className='space-y-3'>
            <TOCLink
              id={id}
              href={`#${id}`}
              activeHeading={activeHeadings}
              level={level}
              minLevel={minLevel}
              className='py-2'
              text={text}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TOC;
