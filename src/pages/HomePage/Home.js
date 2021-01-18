import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import {
  InfoSection,
  InfoSection2,
  Questions,
  EcosystemInfo,
  Partners,
} from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection2 />
      <InfoSection imgOnly={true} />
      <Questions />
      <InfoSection {...homeObjTwo} />
      <EcosystemInfo />
      <Partners />
    </>
  );
};

export default Home;
