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
    <li className='w-full md:mt-10 mt-6'>
      <h2 className='md:text-2xl text-xl'>{title}</h2>
      <div className='flex justify-between text-lg pb-2'>
        <h3 className='text-sm md:text-lg'>{desc}</h3>
        <h3 className='md:text-lg text-sm'>
          {start_date}-{end_date}
        </h3>
      </div>
      <div className='h-0.5 w-full dark:bg-white bg-black'></div>
    </li>
  );
};

export default ListItem;
