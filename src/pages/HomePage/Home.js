import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { InfoSection, InfoSection2, Questions } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection2 />
      <Questions {...homeObjTwo} />
    </>
  );
};

export default Home;
