import type { NextPage } from 'next';
import { ShowCase, Work } from 'components/organisms';

const Home: NextPage = () => {
  return (
    <>
      <ShowCase />
      <Work />
    </>
  );
};

export default Home;
