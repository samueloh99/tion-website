import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ButtonColorful } from '../../styles/GlobalStyles';
import svg1 from '../../images/svg-1.svg';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from './InfoSectionStyle';

function InfoSection({ headline, description, buttonLabel, imgStart, start }) {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Heading>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <Link to="/sign-up">
                  <ButtonColorful>{buttonLabel}</ButtonColorful>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={svg1} alt="img" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
