import styled from 'styled-components';
import * as colors from '../../styles/FontsColors';

export const PartnersContainer = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 20px;
  padding-left: 20px;
  flex-direction: column;
  height: 900px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
    height: auto;
  }
`;

export const PartnersHeading = styled.h1`
  color: ${colors.standardColor};
  font-size: ${colors.h1};
  margin-bottom: 50px;
`;

export const PartnersIconsContainer = styled.div`
  display: flex;
  padding: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
`;

export const PartnersIcon = styled.div`
  display: flex;
  border-radius: 30px;
  transform: rotateY(0deg) rotate(45deg);
  transition: transform 2s;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 160px;
  height: 160px;
  box-shadow: 0px 0px 7px 0px #ccc;
  cursor: pointer;
  margin: 50px;

  &:hover {
    width: 180px;
    height: 180px;
    box-shadow: 0px 0px 17px 0px #ccc;
    transition: all 0.3s ease-out;
  }

  @media screen and (max-width: 991px) {
    margin: 50px 0px 50px 0px;

    &:hover {
      width: 160px;
      height: 160px;
      box-shadow: 0px 0px 7px 0px #ccc;
    }
  }
`;

export const IconImg = styled.img`
  transform: rotate(-45deg);
  margin: 50px;
  width: 150px;
`;
