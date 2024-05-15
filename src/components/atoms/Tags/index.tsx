import { FC } from 'react';

interface TagProps {
  labels: string[];
}

const Tag: FC<TagProps> = ({ labels }) => {
  return (
    <div className='space-x-2 text-base'>
      {labels.map((label, index) => (
        <button
          key={index}
          className='py-1 px-3 rounded-xl bg-slate-900 text-white'
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tag;
