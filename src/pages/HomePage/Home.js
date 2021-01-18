import React from 'react';
import { homeObjOne, homeObjTwo, ecosystemInfo } from './Data';
import {
  InfoSection,
  InfoSection2,
  Questions,
  EcosystemInfo,
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
    </>
  );
};

export default Home;
