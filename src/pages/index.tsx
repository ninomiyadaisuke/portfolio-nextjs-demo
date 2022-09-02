import type { NextPage } from 'next';
import { ShowCase, Work, About } from 'components/organisms';

const Home: NextPage = () => {
  return (
    <>
      <ShowCase />
      <Work />
      <About />
    </>
  );
};

export default Home;
