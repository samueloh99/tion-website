import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import * as colors from '../../styles/FontsColors';

const h1 = '20px';
const h2 = '15px';
const logoTitle = '40px';

export const FooterContainer = styled.div`
  background-color: ${colors.greyLighter};
  display: flex;
  flex-direction: row;
  padding: 70px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    padding: 45px;
  }
`;

export const FooterIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${colors.standardColor};

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-bottom: 50px;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  font-size: ${logoTitle};
  justify-items: center;
  align-items: center;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
  }
`;

export const FooterLinksTopics = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media screen and (max-width: 760px) {
    justify-content: center;
    align-items: center;
  }
`;
export const FooterLinksHeading = styled.p`
  color: ${colors.standardColor};
  font-size: ${h1};
  margin-bottom: 12px;
`;

export const FooterLinksSubtitles = styled.p`
  font-size: ${h2};
  margin-bottom: 5px;
`;

export const FooterRights = styled.div`
  display: flex;
  padding: 40px;
  background: ${colors.grey};
`;

export const FooterRightsDescription = styled.p`
  font-size: 10px;
`;
