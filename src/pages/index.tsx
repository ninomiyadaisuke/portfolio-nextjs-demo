import type { NextPage } from 'next';
import { ShowCase, Work, About, Services, Skills } from 'components/organisms';

const Home: NextPage = () => {
  return (
    <>
      <ShowCase />
      <Work />
      <About />
      <Services />
      <Skills />
    </>
  );
};

export default Home;
