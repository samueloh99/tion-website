import React from 'react';
// import { Link } from 'react-router-dom';
import zenLogo from '../../images/zenLogo.png';

import {
  PartnersContainer,
  PartnersHeading,
  PartnersIconsContainer,
  PartnersIcon,
  IconImg,
} from './PartnersStyle';

function Partners() {
  return (
    <PartnersContainer>
      <PartnersHeading>Parceiros</PartnersHeading>
      <PartnersIconsContainer>
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>{' '}
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>{' '}
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>{' '}
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>{' '}
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>{' '}
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>{' '}
        <PartnersIcon>
          <IconImg src={zenLogo} alt="zen" />
        </PartnersIcon>
      </PartnersIconsContainer>
    </PartnersContainer>
  );
}

export default Partners;
