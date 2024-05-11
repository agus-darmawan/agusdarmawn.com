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
      title: 'ASEC EDU',
      desc: 'IT Mentor',
      start_date: 'Mey 2014',
      end_date: 'Jul 2014',
    },
  ];

  return (
    <section className='flex flex-col md:grid grid-cols-2 gap-16 lg:mt-32 md:mt-24 mt-16'>
      <List title='Education' data={education} />
      <List title='Experience' data={experience} />
    </section>
  );
};

export default ListExperience;
