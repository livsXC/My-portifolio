import styled from "styled-components";
import { useEffect, useRef } from "react";

const educations = [
  { 
    course: "Desenvolvimento de Sistemas",
    institution: "ETEC Machado de Assis",
    tipo: "Técnico",
    period: "2023 - 2024",
  },
  {
    course: "Análise e Desenvolvimento de Sistemas",
    institution: "Unifacvest",
    tipo: "Tecnólogo",
    period: "2025 - 2027",
  }
];

const experiences = [
  { 
    year: 2019,
    title: "Tribunal de Justiça", 
    role: "Estágio Administrativo", 
    period: "2019 - 2020", 
    description: "Atendimento ao público, organização de documentos e arquivos." },
  
  { 
    year: 2021, 
    title: "Embraer", 
    role: "Aprendiz", 
    period: "2021 - 2023", 
    description: "Atividades no Instituto SENAI, com foco em usinagem, controle dimensional e manutenção." },
  
  { 
    year: 2024, 
    title: "Kid Tech", 
    role: "Instrutora de Informatica", 
    period: "2024 - 2025", 
    description: "Suporte a crianças e jovens em atividades de robótica e programação." },
];

const ExperiencesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-item");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Container ref={sectionRef}>
      <Columns>
        <LeftColumn>
          <Title>
            Educaçao
          </Title>

          {educations.map((edu, i) => (
            <Item className="animate-item" key={i}>
              <Dot />
              <Content>
                <h3>{edu.course}</h3>
                <p>{edu.institution}</p>
                <small>{edu.tipo}</small>
              </Content>
              <Year>{edu.period}</Year>
            </Item>
          ))}
        </LeftColumn>

        <RightColumn>
          <Title>
            Experiências
          </Title>

          {experiences.map((exp, i) => (
            <Item className="animate-item" key={i}>
              <Dot />
              <Content>
                <h3>{exp.role}</h3>
                <p>{exp.title}</p>
                <small>{exp.description}</small>
              </Content>
              <Year>{exp.period}</Year>
            </Item>
          ))}
        </RightColumn>
      </Columns>
    </Container>
  );
};

export default ExperiencesSection;

const Container = styled.section`
  background: #000;
  color: #fff;
  padding: 80px 40px;
  display: flex;
  justify-content: center;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  gap: 200px;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 300px;
`;

const RightColumn = styled.div`
  flex: 1;
  min-width: 300px;
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
`;



const Item = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 40px;

  /* ANIMAÇÃO SUAVE */
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.7s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:before {
    content: "";
    position: absolute;
    left: 7px;
    top: 20px;
    width: 2px;
    height: calc(100% - 20px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Dot = styled.div`
  width: 14px;
  height: 14px;
  background: #6c63ff;
  border-radius: 50%;
  margin-right: 16px;
  flex-shrink: 0;
  margin-top: 4px;
`;

const Content = styled.div`
  flex: 1;

  h3 {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #fff;
  }

  p {
    font-size: 0.9rem, span;
    color: #ccc;
    margin-bottom: 3px;
  }

  small {
    font-size: 0.85rem;
    color: #aaa;
    line-height: 1.5;
  }
`;

const Year = styled.div`
  font-size: 0.9rem;
  color: #6c63ff;
  margin-left: 20px;
  white-space: nowrap;
  align-self: flex-start;
`;
