import React from 'react';
import { FaMagento } from 'react-icons/fa';

// import { Button } from '../../globalStyles';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedin,
// } from 'react-icons/fa';

import {
  FooterContainer,
  FooterLogo,
  FooterIcon,
  FooterLinks,
  FooterLinksHeading,
  FooterLinksTopics,
  FooterLinksSubtitles,
  FooterRights,
  FooterRightsDescription,
} from './FooterStyle';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterIcon>
          <FooterLogo>
            <FaMagento />
            tion
          </FooterLogo>
        </FooterIcon>
        <FooterLinks>
          <FooterLinksTopics>
            <FooterLinksHeading>home</FooterLinksHeading>
            <FooterLinksSubtitles>transformação</FooterLinksSubtitles>
            <FooterLinksSubtitles>simplicidade</FooterLinksSubtitles>
            <FooterLinksSubtitles>conexão</FooterLinksSubtitles>
            <FooterLinksSubtitles>ecossistema</FooterLinksSubtitles>
          </FooterLinksTopics>
          <FooterLinksTopics>
            <FooterLinksHeading>como funciona</FooterLinksHeading>
            <FooterLinksSubtitles>XXXXXXXXXXX</FooterLinksSubtitles>
            <FooterLinksSubtitles>XXXXXXXXXXX</FooterLinksSubtitles>
          </FooterLinksTopics>
          <FooterLinksTopics>
            <FooterLinksHeading>parceiros</FooterLinksHeading>
            <FooterLinksSubtitles>XXXXXXXXXXX</FooterLinksSubtitles>
            <FooterLinksSubtitles>XXXXXXXXXXX</FooterLinksSubtitles>
          </FooterLinksTopics>
          <FooterLinksTopics>
            <FooterLinksHeading>baixe grátis</FooterLinksHeading>
            <FooterLinksSubtitles>IOS</FooterLinksSubtitles>
            <FooterLinksSubtitles>android</FooterLinksSubtitles>
          </FooterLinksTopics>
        </FooterLinks>
      </FooterContainer>
      <FooterRights>
        <FooterRightsDescription>
          <strong>Copyright 2020 Tion App. Inc.</strong> Todos os direitos
          reservados. As diversas marcas comerciais pertencem a seus respectivos
          proprietários
        </FooterRightsDescription>
      </FooterRights>
    </>
  );
}

export default Footer;
