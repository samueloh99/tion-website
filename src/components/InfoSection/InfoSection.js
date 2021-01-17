import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ButtonColorful } from '../../styles/GlobalStyles';
import svg1 from '../../images/svg-1.svg';
import pic1 from '../../images/pic1.jpg';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  ImgFull,
} from './InfoSectionStyle';

function InfoSection({
  headline,
  description,
  buttonLabel,
  appear,
  btnAppear,
  imgOnly,
}) {
  return (
    <>
      {imgOnly ? (
        <ImgFull src={pic1} alt="fullImg" />
      ) : (
        <InfoSec>
          <Container>
            <InfoRow>
              <InfoColumn>
                <TextWrapper>
                  <Heading>{headline}</Heading>
                  <Subtitle>{description}</Subtitle>

                  {btnAppear ? (
                    <Link to="/sign-up">
                      <ButtonColorful>{buttonLabel}</ButtonColorful>
                    </Link>
                  ) : (
                    <></>
                  )}
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper appear={appear}>
                  <Img src={svg1} alt="img" />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      )}
    </>
  );
}

export default InfoSection;
