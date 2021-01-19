import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../styles/FontsColors';

export const BePtner = styled.div`
  display: flex;
  background: ${colors.greyLight};
  padding: 100px 0px;
`;

export const BePartnerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  } ;
`;

export const BePartnerRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const BePartnerColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    width: 100%;
  } ;
`;

export const BePartnerDescription = styled.div`
  display: flex;
  font-size: ${colors.h2};
  color: ${colors.black};
  width: 450px;
  margin-bottom: 40px;
  padding: 15px;
  font-weight: 400;

  @media screen and (max-width: 991px) {
    width: auto;
  } ;
`;

export const BePartnerHeading = styled.h1`
  font-size: ${colors.h1};
  color: ${colors.standardColor};
`;

export const BePartnerWrapper = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: column;
  width: 55%;

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    margin-top: 50px;
  } ;
`;

export const BePartnerWrap = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  width: 40%;
  margin: 30px 30px 30px 0px;

  @media screen and (max-width: 991px) {
    width: 100%;
  } ;
`;

export const BePartnerTitle = styled.h1`
  color: ${colors.standardColor};
  font-size: ${colors.subTitlesPartnerPage};

  @media screen and (max-width: 991px) {
    font-size: ${colors.subTitlesPartnerPageMobile};
  } ;
`;

export const BePartnerWrapHeading = styled.div`
  display: flex;
  align-items: end;
`;

export const BePartnerIcon = styled.div`
  display: flex;
  border: 2px solid ${colors.standardColor};
  border-radius: 100%;
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-right: 5px;
`;

export const BePartnerWrapDescription = styled.div`
  display: flex;
  font-size: ${colors.h2};
  color: ${colors.black};
  width: 89%;
  margin-left: auto;
  font-weight: 400;

  @media screen and (max-width: 991px) {
    font-size: ${colors.subTitlesPartnerPageMobile};
    width: 87%;
  } ;
`;
