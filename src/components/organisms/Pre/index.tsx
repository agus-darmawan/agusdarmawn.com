'use client';
import React, { ComponentPropsWithoutRef, FC, useRef } from 'react';
import { BiCheck, BiCopy } from 'react-icons/bi';

import 'highlight.js/styles/github-dark-dimmed.css';

import useClipboard from '@/hooks/useClipboard';

const Pre: FC<ComponentPropsWithoutRef<'pre'>> = ({ children, ...rest }) => {
  const [copied, copyToClipboard] = useClipboard();
  const preRef = useRef<HTMLPreElement>(null);

  return (
    <pre
      {...rest}
      ref={preRef}
      className='relative p-0 bg-gray-700 my-6 rounded-xl overflow-hidden'
    >
      <div className='absolute top-3 right-3 flex space-x-3 text-white'>
        <button
          onClick={() => copyToClipboard(preRef.current?.textContent || '')}
        >
          {copied ? <BiCheck size={20} /> : <BiCopy size={20} />}
        </button>
      </div>
      <code className='leading-relaxed text-xs md:text-base font-extralight'>
        {children}
      </code>
    </pre>
  );
};

export default Pre;
