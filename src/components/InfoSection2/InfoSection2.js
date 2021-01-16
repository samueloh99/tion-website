import React from 'react';
import { GiRock } from 'react-icons/gi';
// import svg1 from '../../images/svg-1.svg';

import {
  InfoSec,
  InfoSecWrapper,
  InfoSecHeading,
  InfoSecContainer,
  InfoSecCard,
  InfoSecInfo,
  InfoSecIcon,
  InfoSecDesc,
} from './InfoSection2Style';

function InfoSection2() {
  return (
    <>
      <InfoSec>
        <InfoSecWrapper>
          <InfoSecContainer>
            <InfoSecCard>
              <InfoSecInfo>
                <InfoSecIcon>
                  <GiRock />
                </InfoSecIcon>
                <InfoSecDesc>
                  Descubra novas
                  <strong> técnicas de meditação</strong> e
                  <strong> de práticas para a mente </strong>
                </InfoSecDesc>
              </InfoSecInfo>
            </InfoSecCard>

            <InfoSecCard>
              <InfoSecInfo>
                <InfoSecIcon>
                  <GiRock />
                </InfoSecIcon>
                <InfoSecDesc>
                  Descubra novas
                  <strong> técnicas de meditação</strong> e
                  <strong> de práticas para a mente </strong>
                </InfoSecDesc>
              </InfoSecInfo>
            </InfoSecCard>

            <InfoSecCard>
              <InfoSecInfo>
                <InfoSecIcon>
                  <GiRock />
                </InfoSecIcon>
                <InfoSecDesc>
                  Descubra novas
                  <strong> técnicas de meditação</strong> e
                  <strong> de práticas para a mente </strong>
                </InfoSecDesc>
              </InfoSecInfo>
            </InfoSecCard>
          </InfoSecContainer>
          <InfoSecContainer>
            <InfoSecCard>
              <InfoSecInfo>
                <InfoSecIcon>
                  <GiRock />
                </InfoSecIcon>
                <InfoSecDesc>
                  Descubra novas
                  <strong> técnicas de meditação</strong> e
                  <strong> de práticas para a mente </strong>
                </InfoSecDesc>
              </InfoSecInfo>
            </InfoSecCard>

            <InfoSecCard>
              <InfoSecInfo>
                <InfoSecIcon>
                  <GiRock />
                </InfoSecIcon>
                <InfoSecDesc>
                  Descubra novas
                  <strong> técnicas de meditação</strong> e
                  <strong> de práticas para a mente </strong>
                </InfoSecDesc>
              </InfoSecInfo>
            </InfoSecCard>

            <InfoSecCard>
              <InfoSecInfo>
                <InfoSecIcon>
                  <GiRock />
                </InfoSecIcon>
                <InfoSecDesc>
                  Descubra novas
                  <strong> técnicas de meditação</strong> e
                  <strong> de práticas para a mente </strong>
                </InfoSecDesc>
              </InfoSecInfo>
            </InfoSecCard>
          </InfoSecContainer>
          <InfoSecHeading>
            A Tion é um{' '}
            <span
              style={{
                color: '#36ddd4',
                textDecoration: 'underline',
                textDecorationColor: '#4f25e8',
              }}
            >
              movimento
            </span>
          </InfoSecHeading>
        </InfoSecWrapper>
      </InfoSec>
    </>
  );
}

export default InfoSection2;
