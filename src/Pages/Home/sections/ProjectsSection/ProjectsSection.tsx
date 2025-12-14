import React from "react";
import { Box, Container, Grid, Typography, styled, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

// ===== Dados dos projetos =====
interface ProjectCardProps {
  title: string;
  subtitle: string;
  srcImg: string;
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
}

const projects: ProjectCardProps[] = [
  {
    title: "Spotify",
    subtitle: "Março/2025",
    srcImg: "public/img/project-spotify.png",
    description: "Clone do Spotify que simula reprodução e navegação por playlists usando uma API local. Projeto para treinar manipulação de DOM, estilização com dados dinâmicos.",
    technologies: "JavaScript, HTML, CSS, Python e Flask",
    websiteURL: "https://livsxc.github.io/Spotify/",
    codeURL: "https://github.com/livsXC/Spotify.git",
  },
  
  {
    title: "Imersão de Análise de Dados",
    subtitle: "Setembro/2023",
    srcImg: "public/img/project-dados.png",
    description: "Dashboard interativo em Python com Streamlit para explorar e visualizar dados salariais da área de dados. Permite analisar tendências por cargo, experiência, contrato, localização...",
    technologies: "Python, Pandas, Plotly e Streamlit",
    websiteURL: "https://imers-o-dados-com-python-c2hhpjanno5rqhp8gzxbnd.streamlit.app/",
    codeURL: "https://github.com/livsXC/Imers-o-Dados-com-Python.git",
  },

  {
    title: "Sistema Avida Clinic",
    subtitle: "Julho/2025",
    srcImg: "public/img/project-avida.png",
    description: "Desenvolvi um aplicativo web para auxiliar profissionais de saúde para organizar suas consultas e informações de pacientes de forma prática e eficiente.",
    technologies: "JavaScript, HTML, CSS, Python e Flask",
    websiteURL: "https://drive.google.com/file/d/1MrDh5E_4kq9-LqZJwvipj9U9HWm4Z9wg/view?usp=drive_link",
    codeURL: "https://github.com/livsXC/Sistema_AvidaClinic.git",
  },

  {
    title: "Meu primeiro Cadastro",
    subtitle: "Nov/2024",
    srcImg: "public/img/project-cadastro.png",
    description: "Sistema web de login e cadastro de usuários, criado para praticar autenticação e manipulação de dados. Projeto voltado ao aperfeiçoamento em desenvolvimento full-stack.",
    technologies: "PHP, HTML, CSS, JavaScript e MongoDB,",
    websiteURL: "#",
    codeURL: "https://github.com/livsXC/Meu-Primeiro-Acesso-PHP.git",
  },
];

// ===== Componente =====
const ProjectsSection: React.FC = () => {
  return (
    <StyledProjectsSection>
      <Container maxWidth="lg">
        <Box id="projects">
          <SectionTitle variant="h2">Projects</SectionTitle>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                <StyledCard>
                  <ProjectImage image={project.srcImg} title={project.title} />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>{project.title}</Typography>
                    <Typography variant="subtitle2" color="textSecondary">{project.subtitle}</Typography>
                    <Typography variant="body2">{project.description}</Typography>
                    <ProjectTech>{project.technologies}</ProjectTech>
                  </CardContent>
                  <CardActions>
                    {project.websiteURL && (
                      <StyledButton
                        onClick={() =>
                          window.open(project.websiteURL, "_blank", "noopener,noreferrer")
                        }
                      >
                        Visualizar
                      </StyledButton>
                    )}

                    <StyledButton
                      onClick={() =>
                        window.open(project.codeURL, "_blank", "noopener,noreferrer")
                      }
                    >
                      Código
                    </StyledButton>
                  </CardActions>

                </StyledCard>
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjectsSection>
  );
};

export default ProjectsSection;

// ===== Styled Components =====
const StyledProjectsSection = styled("section")({
  backgroundColor: "#6C63FF",
  padding: "80px 0",
});

const SectionTitle = styled(Typography)({
  color: "#fff",
  fontWeight: 700,
  marginBottom: "80px",
  fontSize: "3rem",
  textAlign: "center",
});

const StyledCard = styled(Card)({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },
});

const StyledButton = styled(Button)({
  color: "#fff",
  backgroundColor: "#6b63ffeb",
  textTransform: "none", // remove maiúsculas automáticas
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.61)",
  },
});


const ProjectImage = styled(CardMedia)({
  height: 220,
});

const ProjectTech = styled(Typography)({
  fontSize: "0.9rem",
  fontStyle: "italic",
  color: "#666",
  marginTop: "8px",
});
