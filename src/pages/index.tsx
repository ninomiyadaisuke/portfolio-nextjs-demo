import type { NextPage } from 'next';
import { ShowCase, Work, About, Services } from 'components/organisms';

const Home: NextPage = () => {
  return (
    <>
      <ShowCase />
      <Work />
      <About />
      <Services />
    </>
  );
};

export default Home;
