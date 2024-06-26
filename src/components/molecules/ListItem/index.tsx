import { FC } from 'react';

export interface IListItemProps {
  title: string;
  desc: string;
  start_date: string;
  end_date: string;
}

const ListItem: FC<IListItemProps> = ({
  title,
  desc,
  start_date,
  end_date,
}) => {
  return (
    <li className='w-full md:mt-10 mt-5'>
      <h2 className='lg:text-2xl md:text-xl text-base'>{title}</h2>
      <div className='flex justify-between pb-2'>
        <h3 className='text-sm md:text-lg'>{desc}</h3>
        <h3 className='md:text-lg text-sm'>
          {start_date}-{end_date}
        </h3>
      </div>
      <div className='h-0.5   w-full dark:bg-white bg-black'></div>
    </li>
  );
};

export default ListItem;
