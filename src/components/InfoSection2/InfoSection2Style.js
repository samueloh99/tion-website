import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../styles/FontsColors';

export const InfoSec = styled.div`
  padding: 10px 0px 10px 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const InfoSecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoSecHeading = styled.h1`
  color: ${colors.standardColor};
  font-size: ${colors.h1};
  margin-bottom: 24px;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: ${colors.h1Mobile};
  }
`;

export const InfoSecContainer = styled.div`
  /* padding: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const InfoSecCard = styled.div`
  text-decoration: none;
  width: 230px;
  height: auto;
  border-radius: 4px;
  margin: 50px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const InfoSecInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
`;

export const InfoSecIcon = styled.div`
  margin: 24px 0px;
`;

export const InfoSecDesc = styled.h3`
  margin-bottom: 5px;
  font-size: 15px;
  text-align: center;
  font-weight: 400;
`;
