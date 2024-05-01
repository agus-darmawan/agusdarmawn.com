import { FC } from 'react';

import { SkilIcon } from '@/components';

interface IIconListProps {
  icons: Array<string>;
}

const IconList: FC<IIconListProps> = ({ icons }) => {
  return (
    <ul className='flex flex-row gap-4'>
      {icons.map((icon) => (
        <li key={icon}>
          <SkilIcon icon={icon} />
        </li>
      ))}
    </ul>
  );
};

export default IconList;
