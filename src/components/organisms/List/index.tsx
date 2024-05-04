import * as React from 'react';

import { GradientText, ListItem } from '@/components';
import { IListItemProps } from '@/components/molecules/ListItem';

export interface IListProps {
  title: string;
  data: Array<IListItemProps>;
}

const List: React.FunctionComponent<IListProps> = ({ data, title }) => {
  return (
    <section>
      <h3 className='text-3xl md:text-4xl lg:text-5xl text-center font-semibold'>
        <GradientText>{title}</GradientText>
      </h3>
      <ul>
        {data.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default List;
