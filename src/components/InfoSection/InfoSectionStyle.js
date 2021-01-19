import styled from 'styled-components';
import * as colors from '../../styles/FontsColors';

export const InfoSec = styled.div`
  color: ${colors.white};
  padding: 160px 0;
  background: white;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: ${({ appear }) => (appear ? 'flex' : 'none')};
  justify-content: flex-start;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-widht: 760px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: ${colors.h1};
  line-height: 1.1;
  color: ${colors.standardColor};

  @media screen and (max-width: 960px) {
    font-size: ${colors.h1Mobile};
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-weight: 400;
  font-size: ${colors.h2};
  line-height: 24px;
  color: ${colors.black};

  @media screen and (max-width: 960px) {
    font-size: ${colors.h2Mobile};
  }
`;

export const ImgFull = styled.img`
  margin: 70px 0px 70px 0px;
  width: 100%;

  @media screen and (max-widht: 760px) {
    width: 70%;
  }
`;
