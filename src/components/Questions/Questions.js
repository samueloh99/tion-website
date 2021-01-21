import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
// import { Container, ButtonColorful } from '../../styles/GlobalStyles';
// import svg1 from '../../images/svg-1.svg';

import {
  QuestionsDiv,
  QuestionsContainer,
  QuestionsWrapper,
  QuestionsHeading,
  QuestionsBox,
  QuestionsTitle,
  QuestionsIcon,
  QuestionsInfo,
} from './QuestionsStyle';

function Questions({ questionsFirst, questionsSecond }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <QuestionsDiv>
        <QuestionsContainer>
          <QuestionsHeading>Perguntas frequentes</QuestionsHeading>
          <QuestionsWrapper>
            <QuestionsBox>
              <QuestionsTitle>COMO FUNCIONA ?</QuestionsTitle>
              <QuestionsIcon onClick={handleClickOpen}>
                <AiFillPlusCircle />
                {open ? (
                  <QuestionsInfo open={open}></QuestionsInfo>
                ) : (
                  <QuestionsInfo />
                )}
              </QuestionsIcon>
            </QuestionsBox>
            <QuestionsBox>
              <QuestionsTitle>POR QUE TION ?</QuestionsTitle>
              <QuestionsIcon>
                <AiFillPlusCircle />
              </QuestionsIcon>
            </QuestionsBox>
          </QuestionsWrapper>
          <QuestionsWrapper>
            <QuestionsBox>
              <QuestionsTitle>POSSO ACESSAR DE QUALQUER LUGAR ?</QuestionsTitle>
              <QuestionsIcon>
                <AiFillPlusCircle />
              </QuestionsIcon>
            </QuestionsBox>
            <QuestionsBox>
              <QuestionsTitle>COMO SE TORNAR UM MEMBRO ?</QuestionsTitle>
              <QuestionsIcon>
                <AiFillPlusCircle />
              </QuestionsIcon>
            </QuestionsBox>
          </QuestionsWrapper>
        </QuestionsContainer>
      </QuestionsDiv>
    </>
  );
}

export default Questions;
