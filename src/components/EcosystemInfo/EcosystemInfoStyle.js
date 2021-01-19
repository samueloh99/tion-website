import styled from 'styled-components';
import * as colors from '../../styles/FontsColors';

export const Ecosystem = styled.div`
  color: ${colors.white};
  margin-bottom: 80px;
`;

export const EcosystemRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  height: 700px;

  @media screen and (max-width: 760px) {
    height: auto;
  }
`;

export const EcosystemColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  height: 100%;

  @media screen and (max-width: 760px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: auto;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
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
  padding-bottom: 50px;

  @media screen and (max-widht: 760px) {
    padding-bottom: 65px;
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 50px;
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

export const DropdownInfo = styled.div`
  display: flex;

  max-width: 540px;
  padding-top: 0;
  padding-bottom: 20px;
  flex-direction: column;

  @media screen and (max-widht: 760px) {
    padding-bottom: 25px;
    flex-direction: column;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  width: 65%;
  color: black;
  align-items: center;
`;

export const DropdownHeading = styled.div`
  color: black;

  @media screen and (max-width: 960px) {
    font-size: ${colors.h3Mobile};
  }
`;
export const DropdownIcon = styled.div`
  display: flex;
  color: black;
  margin-left: auto;
  border-radius: 100%;
  box-shadow: 0px 0px 7px 0px #ccc;
  width: 26px;
  height: 26px;
  align-items: center;
  justify-content: center;
`;

export const ThinLine = styled.div`
  border: 0.5px solid ${colors.grey};
  border-width: thin;
  width: 65%;
  margin-top: 10px;
`;

export const DropdownInfoOpen = styled.div`
  width: 65%;
  display: ${({ openInfo }) => (openInfo ? 'flex' : 'none')};
  flex-direction: column;
`;

export const DropdownInfoOpenHeading = styled.div`
  color: ${colors.standardColor};
  padding: 15px;

  @media screen and (max-width: 960px) {
    font-size: ${colors.h3Mobile};
  }
`;
