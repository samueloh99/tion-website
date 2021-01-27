import styled from 'styled-components';
import * as colors from '../../styles/FontsColors';

export const InfoSec = styled.div`
  display: flex;
  color: ${colors.white};
  padding: 160px 0;
  background: white;
  position: relative;
  align-items: center;

  img {
    padding-right: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
    box-shadow: -60px 0px 0px 0px #ebebeb;
    position: absolute;
    right: 0;
    top: 100px;

    @media screen and (max-width: 991px) {
      position: relative;
      max-width: 60%;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    position: none;
  } ;
`;

export const InfoSecContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  } ;
`;

export const TextWrapper = styled.div`
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
