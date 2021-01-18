import styled from 'styled-components';
import * as colors from '../../styles/FontsColors';

export const QuestionsDiv = styled.div`
  display: flex;
`;

export const QuestionsContainer = styled.div`
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

export const QuestionsHeading = styled.h1`
  color: ${colors.standardColor};
  font-size: ${colors.h1};
  margin-bottom: 100px;
`;

export const QuestionsWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const QuestionsBox = styled.div`
  display: flex;
  padding: 18px;
  margin: 10px;
  width: 500px;
  border-radius: 100px;
  background-color: ${colors.standardColor};

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

export const QuestionsTitle = styled.div`
  color: ${colors.white};
  display: flex;
  align-items: center;
`;

export const QuestionsIcon = styled.div`
  margin-left: auto;
  color: white;
  font-size: 35px;
  cursor: pointer;
`;

export const QuestionsInfo = styled.div`
  border: 3px solid red;
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;
