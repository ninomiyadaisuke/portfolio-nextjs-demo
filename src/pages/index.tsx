import type { NextPage } from 'next';
import { ShowCase, Work, About, Services, Skills, Testimonials, Contact } from 'components/organisms';

const Home: NextPage = () => {
  return (
    <>
      <ShowCase />
      <Work />
      <About />
      <Services />
      <Skills />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
