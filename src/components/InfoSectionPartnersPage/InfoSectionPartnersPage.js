import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import pic2 from '../../images/pic2.jpg';

import {
  InfoSec,
  InfoSecContainer,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoSectionPartnersPageStyle';

function InfoSection() {
  return (
    <>
      <InfoSec>
        <InfoSecContainer>
          <TextWrapper>
            <Heading>Unidos somo mais fortes</Heading>
            <Subtitle>
              Nossos parceiros incentivam a meditação e oferecem produtos que
              podem ser adquiridos com os TionTokens.
            </Subtitle>
            <Subtitle>
              Tudo isso para que você nos ajude a criar um Ecossistema que
              cresce em direção a um interesse único: a paz e a união entre as
              pessoas, porque é quando nos juntamos que conseguimos mudar o
              mundo.
            </Subtitle>
          </TextWrapper>
        </InfoSecContainer>
        <ImgWrapper>
          <Img src={pic2} alt="img" />
        </ImgWrapper>
      </InfoSec>
    </>
  );
}

export default InfoSection;
