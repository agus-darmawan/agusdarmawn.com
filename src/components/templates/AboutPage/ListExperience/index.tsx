import { FC } from 'react';

import { List } from '@/components';

const ListExperience: FC = () => {
  const education = [
    {
      title: 'SMAN Bali Mandara',
      desc: 'Matematic and Science',
      start_date: 'Mey 2014',
      end_date: 'Jul 2014',
    },
    {
      title: 'Institut Teknologi Sepuluh Nopember',
      desc: 'Computer Engineering',
      start_date: 'Mey 2014',
      end_date: 'Jul 2014',
    },
  ];
  const experience = [
    {
      title: 'PT Satkomindo Mediyasa',
      desc: 'Full Stack Developer',
      start_date: 'Peb 2024',
      end_date: 'Jul 2024',
    },
    {
      title: 'Barunastra ITS',
      desc: 'Programming leader',
      start_date: 'Mey 2014',
      end_date: 'Jul 2014',
    },
    {
      title: 'Barunastra ITS',
      desc: 'Programming leader',
      start_date: 'Mey 2014',
      end_date: 'Jul 2014',
    },
  ];

  return (
    <section className='flex flex-col md:grid grid-cols-2 gap-20 px-10 md:px-20 lg:px-40 mt-32'>
      <List title='Education' data={education} />
      <List title='Experience' data={experience} />
    </section>
  );
};

export default ListExperience;
