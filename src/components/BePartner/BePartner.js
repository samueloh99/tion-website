import React from 'react';
// import svg1 from '../../images/svg-1.svg';
import { ButtonColorful } from '../../styles/GlobalStyles';
import { Link } from 'react-router-dom';
import * as colors from '../../styles/FontsColors';

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
  step4,
  step1Desc,
  step2Desc,
  step3Desc,
  step4Desc,
  backgroundColor,
  obs,
}) {
  return (
    <BePtner backgroundColor={backgroundColor}>
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
              {obs ? (
                <BePartnerWrap>
                  <BePartnerWrapHeading></BePartnerWrapHeading>
                  <BePartnerWrapDescription
                    style={{ color: colors.standardColor, fontSize: '14px' }}
                  >
                    <strong>Obs.:</strong> Como ainda estamos em fase Beta, as
                    regras sobre os ganhos em TionTokens são flexíveis e
                    sujeitas a alteração.
                  </BePartnerWrapDescription>
                </BePartnerWrap>
              ) : (
                <BePartnerWrap>
                  <BePartnerWrapHeading>
                    <BePartnerIcon>4</BePartnerIcon>
                    <BePartnerTitle>{step4}</BePartnerTitle>
                  </BePartnerWrapHeading>
                  <BePartnerWrapDescription>
                    {step4Desc}
                  </BePartnerWrapDescription>
                </BePartnerWrap>
              )}
            </BePartnerRow>
          </BePartnerWrapper>
        </BePartnerRow>
      </BePartnerContainer>
    </BePtner>
  );
}

export default BePartner;
