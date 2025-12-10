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

  @media (max-width: 480px) {
    padding: 40px 20px; /* reduz padding no mobile */
  }
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  gap: 200px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column; /* empilha colunas no mobile */
    gap: 40px;              /* reduz o espaço */
  }
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

  @media (max-width: 480px) {
    font-size: 2rem; /* menor título no celular */
    margin-bottom: 20px;
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
    
  @media (max-width: 480px) {
    flex-direction: column; /* conteúdo em coluna no celular */
    align-items: flex-start;
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

    @media (max-width: 480px) {
      font-size: 0.9rem;   /* menor título no celular */
      margin-bottom: 4px;
    }
  }

  p {
    font-size: 0.9rem;
    color: #ccc;
    margin-bottom: 3px;

    @media (max-width: 480px) {
      font-size: 0.8rem;   /* reduz fonte no celular */
      margin-bottom: 2px;
    }
  }

  small {
    font-size: 0.85rem;
    color: #aaa;
    line-height: 1.5;

    @media (max-width: 480px) {
      font-size: 0.75rem;  /* menor legenda */
      line-height: 1.4;
    }
  }

  @media (max-width: 480px) {
      margin-left: 25px; 
    }
`;


const Year = styled.div`
  font-size: 0.9rem;
  color: #6c63ff;
  margin-left: 20px;
  white-space: nowrap;
  align-self: flex-start;

  @media (max-width: 480px) {
    margin-left: 25px; /* evita quebra no mobile */
    margin-top: 10px;
  }
`;
