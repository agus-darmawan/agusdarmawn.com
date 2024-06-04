import { FC } from 'react';

interface TagProps {
  labels: string[];
}

const Tag: FC<TagProps> = ({ labels }) => {
  return (
    <div className='md:space-x-1'>
      {labels.map((label, index) => (
        <button
          key={index}
          className='px-2 py-0.5 rounded-xl bg-slate-900/50 text-white md:text-sm text-xs font-light'
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Tag;
