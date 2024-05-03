import { FC, ReactNode } from 'react';

interface ITabsBodyProps {
  tabs: { title: string; content: ReactNode }[];
  activeTab: string;
}

const TabsBody: FC<ITabsBodyProps> = ({ tabs, activeTab }) => {
  return (
    <ul className='flex justify-center md:py-3 flex-wrap px-10'>
      {tabs.map(({ title, content }, index) => (
        <li
          key={index}
          className={title === activeTab ? 'block mx-100' : 'hidden'}
        >
          {content}
        </li>
      ))}
    </ul>
  );
};

export default TabsBody;
