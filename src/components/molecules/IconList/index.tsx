import { FC } from 'react';

import { SkillIcon } from '@/components';

interface IIconListProps {
  icons: Array<string>;
}

const IconList: FC<IIconListProps> = ({ icons }) => {
  return (
    <ul className='flex flex-row md:gap-4'>
      {icons.map((icon) => (
        <li key={icon}>
          <SkillIcon icon={icon} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
