import React, { useState } from 'react';
import { Container } from '../../styles/GlobalStyles';
import ecossistema from '../../images/ecossistema.png';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { EcosystemInfoData } from '../../pages/HomePage/Data';

import {
  Ecosystem,
  EcosystemRow,
  EcosystemColumn,
  TextWrapper,
  Heading,
  ImgWrapper,
  Img,
  Subtitle,
  DropdownInfo,
  DropdownWrapper,
  DropdownHeading,
  DropdownIcon,
  ThinLine,
  DropdownInfoOpen,
  DropdownInfoOpenHeading,
} from './EcosystemInfoStyle';

function EcosystemInfo() {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <>
      <Ecosystem>
        <Container>
          <EcosystemRow>
            <EcosystemColumn>
              <TextWrapper>
                <Heading>Ecossistema Tion</Heading>
                <Subtitle>
                  <strong>
                    O Ecossistema Tion é um ambiente virtual que inclui todos os
                    envolvidos com a Tion, desde criadores até parceiros.
                  </strong>
                  É dentro do Ecossistema que cada membro pode evoluir e criar a
                  sua rede de conexão, contribuindo cada vez mais para a
                  evolução do todo.
                </Subtitle>
              </TextWrapper>
              {EcosystemInfoData.map((info, index) => (
                <DropdownInfo>
                  <DropdownWrapper onClick={() => toggle(index)} key={index}>
                    <DropdownHeading>{info.title}</DropdownHeading>
                    <DropdownIcon>
                      {open === index ? <BsChevronUp /> : <BsChevronDown />}
                    </DropdownIcon>
                  </DropdownWrapper>
                  <ThinLine />
                  {open === index ? (
                    <DropdownInfoOpen>
                      {info.items.map((item) => (
                        <DropdownInfoOpenHeading>
                          {item}
                        </DropdownInfoOpenHeading>
                      ))}
                    </DropdownInfoOpen>
                  ) : (
                    <></>
                  )}
                </DropdownInfo>
              ))}
            </EcosystemColumn>
            <EcosystemColumn>
              <ImgWrapper>
                <Img src={ecossistema} alt="img" />
              </ImgWrapper>
            </EcosystemColumn>
          </EcosystemRow>
        </Container>
      </Ecosystem>
    </>
  );
}

export default EcosystemInfo;
