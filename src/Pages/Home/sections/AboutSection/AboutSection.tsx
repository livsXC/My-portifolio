import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import Avatar from "../../../../assets/images/avatar1.png";

const AboutSection: React.FC = () => (
  <Container>
    <AboutContainer>
      <ProfileImage src={Avatar} alt="Foto de Lívia" />

      <TextSection>
        <Title>Sobre mim</Title>
        <AboutText>
          Sou <strong>Lívia Souza Lopes do Rosário</strong>, tenho 22 anos e moro em Caçapava, no interior de São Paulo.
          Tenho formação técnica em Desenvolvimento de Sistemas e atualmente curso <strong>ADS</strong>,
          sempre buscando ampliar meus conhecimentos e habilidades.  
          <p></p>
          Tenho grande interesse em atuar em projetos que me permitam crescer, colaborar com equipes e contribuir para 
          soluções inovadoras. Acredito que cada experiência é uma chance de aprendizado e estou motivada a trilhar um 
          caminho de aprendizado contínuo e impacto positivo no mundo da tecnologia.
        </AboutText>

        <IconsWrapper>
          <ContactItem onClick={() => window.open("https://github.com/livsXC", "_blank")}>
            <FaGithub size={25} />
            <span>livsXC</span>
          </ContactItem>

          <ContactItem onClick={() => window.open("https://www.linkedin.com/in/l%C3%ADvia-ros%C3%A1rio/", "_blank")}>
            <FaLinkedin size={25} />
            <span>lívia_rosário</span>
          </ContactItem>

          <ContactItem onClick={() => window.open("mailto:lliviasouza509@gmail.com")}>
            <FaEnvelope size={25} />
            <span>lliviasouza509@gmail.com</span>
          </ContactItem>
        </IconsWrapper>

      </TextSection>
    </AboutContainer>
  </Container>
);

export default AboutSection;

const Container = styled.div`
  max-width: 100%;
  padding: clamp(32px, 5vw, 60px) 20px;
  background: #000;
  color: #f5f5f5;
  text-align: center;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.img`
  width: 320px;
  height: 500px;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(138, 132, 243, 0.2);
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 400px;
  }
`;

const TextSection = styled.div`
  flex: 2;
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;

  &::first-letter {
    color: #6c63ff;
    font-size: 3.9rem;
  }
  
  @media (max-width: 320px){
    font-size: 2rem;
  }
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  color: #dcdcdc;
  text-align: justify;

  strong {
    color: #fff;
  }
  
  @media (max-width: 320px){
    font-size: 0.8rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 50px;
  flex-wrap: wrap;

  @media (max-width: 320px){
    font-size: 0.8rem;
    
  }
`;


const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ccc;
  font-size: 0.75rem;
  transition: transform 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    color: #6c63ff;
  }

  svg {
    transition: color 0.3s;
  }
`;
