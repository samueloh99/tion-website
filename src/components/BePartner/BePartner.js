import React from 'react';
// import svg1 from '../../images/svg-1.svg';
import { ButtonColorful } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';

import {
  BePartnerContainer,
  BePtner,
  BePartnerHeading,
  BePartnerRow,
  BePartnerColumn,
  BePartnerDescription,
  BePartnerWrapper,
  BePartnerWrap,
  BePartnerTitle,
  BePartnerWrapHeading,
  BePartnerIcon,
  BePartnerWrapDescription,
} from './BePartnerStyle';

function BePartner({
  headline,
  description1,
  description2,
  buttonLabel,
  headline2,
  step1,
  step2,
  step3,
  step1Desc,
  step2Desc,
  step3Desc,
}) {
  return (
    <BePtner>
      <BePartnerContainer>
        <BePartnerRow>
          <BePartnerHeading>{headline}</BePartnerHeading>
        </BePartnerRow>
        <BePartnerRow>
          <BePartnerColumn>
            <BePartnerDescription style={{ fontWeight: 'bold' }}>
              {description1}
            </BePartnerDescription>
            <BePartnerDescription>{description2}</BePartnerDescription>
            <Link>
              <ButtonColorful>{buttonLabel}</ButtonColorful>
            </Link>
          </BePartnerColumn>
          <BePartnerWrapper>
            <BePartnerRow>
              <BePartnerTitle>{headline2}</BePartnerTitle>
            </BePartnerRow>
            <BePartnerRow>
              <BePartnerWrap>
                <BePartnerWrapHeading>
                  <BePartnerIcon>1</BePartnerIcon>
                  <BePartnerTitle>{step1}</BePartnerTitle>
                </BePartnerWrapHeading>
                <BePartnerWrapDescription>{step1Desc}</BePartnerWrapDescription>
              </BePartnerWrap>
              <BePartnerWrap>
                <BePartnerWrapHeading>
                  <BePartnerIcon>2</BePartnerIcon>
                  <BePartnerTitle>{step2}</BePartnerTitle>
                </BePartnerWrapHeading>
                <BePartnerWrapDescription>{step2Desc}</BePartnerWrapDescription>
              </BePartnerWrap>
              <BePartnerWrap>
                <BePartnerWrapHeading>
                  <BePartnerIcon>3</BePartnerIcon>
                  <BePartnerTitle>{step3}</BePartnerTitle>
                </BePartnerWrapHeading>
                <BePartnerWrapDescription>{step3Desc}</BePartnerWrapDescription>
              </BePartnerWrap>
              <BePartnerWrap>
                <BePartnerWrapHeading>
                  <BePartnerIcon>obs</BePartnerIcon>
                  <BePartnerTitle>{step1}</BePartnerTitle>
                </BePartnerWrapHeading>
                <BePartnerWrapDescription>{step1Desc}</BePartnerWrapDescription>
              </BePartnerWrap>
            </BePartnerRow>
          </BePartnerWrapper>
        </BePartnerRow>
      </BePartnerContainer>
    </BePtner>
  );
}

export default BePartner;
