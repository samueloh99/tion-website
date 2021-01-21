import React from 'react';
import { InfoSectionPartnersPage, BePartner } from '../../components';
import { dataOne, dataTwo } from './Data';

const PartnersPage = () => {
  return (
    <>
      <InfoSectionPartnersPage />
      <BePartner {...dataOne} />
      <BePartner {...dataTwo} />
    </>
  );
};

export default PartnersPage;
