import { Box, Container, Typography, styled } from "@mui/material";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/CVLivia_Rosario.pdf";
import React from "react";

const HeroSection: React.FC = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
    position: "relative",
  }));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "CVLivia_Rosario.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailLivia = "lliviasouza509@gmail.com";
    const subject = "Contato via Portfólio";
    const body = "Olá Lívia, vi seu portfólio e gostaria de conversar!";
    const mailtoLink = `mailto:${emailLivia}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
        <StyledHero>
          {/* Fundo animado */}
        <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            sx={{
              background: "linear-gradient(120deg, #0d0d0d, #1a1a1a, #6C63FF, #2c2c2c)",
              backgroundSize: "400% 400%",
              animation: "gradientMove 15s ease infinite",
              "@keyframes gradientMove": {
                "0%": { backgroundPosition: "0% 50%" },
                "50%": { backgroundPosition: "100% 50%" },
                "100%": { backgroundPosition: "0% 50%" },
            },
          }}
        />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        {/* Nome principal */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "primary.contrastText",
            mb: 1,
          }}
        >
          Lívia Rosario
        </Typography>

        {/* Subtítulo animado */}
        <Typewriter
          text="Construindo o futuro com código e propósito"
          delay={100}
          variant="h5"
          color="primary.contrastText"
        />

        {/* Botões */}
        <Box mt={5} display="flex" justifyContent="center" gap={3}>
          {/* Botão branco */}
          <StyledButton
            onClick={handleDownload}
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: "#fff",
              color: "#6C63FF",
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
            }}
          >
            Download CV
          </StyledButton>

          {/* Botão roxo */}
          <StyledButton
            onClick={handleEmail}
            startIcon={<EmailIcon />}
            sx={{
              backgroundColor: "#6C63FF",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#5a52e0",
              },
            }}
          >
            Entre em contato
          </StyledButton>
        </Box>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
