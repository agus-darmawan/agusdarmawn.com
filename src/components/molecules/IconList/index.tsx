import { FC } from 'react';

import { SkillIcon } from '@/components';

interface IIconListProps {
  icons: Array<string>;
}

const IconList: FC<IIconListProps> = ({ icons }) => {
  return (
    <ul className='flex flex-row justify-between w-full md:gap-10 gap-2'>
      {icons.map((icon) => (
        <li key={icon}>
          <SkillIcon icon={icon} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
