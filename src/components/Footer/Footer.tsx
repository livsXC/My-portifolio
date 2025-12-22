import { Box, Container, IconButton, styled, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// Footer container estilizado
const StyledContainer = styled(Box)`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background: #000;
  color: white;
`;

// IconButton com cor personalizada
const ColorIconButton = styled(IconButton)`
  color: #ffffff;
  opacity: 0.9;
  transition: color 0.2s ease;
  margin-bottom: 35px;

  &:hover {
    color: #6C63FF; /* cor ao passar o mouse */
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledContainer>
      <Box pt={2} pb={2}>
        <Container maxWidth="sm">
          <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
            <ColorIconButton onClick={() => window.open("https://github.com/livsXC")}>
              <GitHubIcon />
            </ColorIconButton>
            <ColorIconButton onClick={() => window.open("https://www.linkedin.com/in/l%C3%ADvia-ros%C3%A1rio/")}>
              <LinkedInIcon />
            </ColorIconButton>
            <ColorIconButton>
            <a href="mailto:lliviasouza509@gmail.com" target="_blank" rel="noopener noreferrer"></a>
              <EmailIcon />
            </ColorIconButton>
          </Box>
          <Typography textAlign="center">
            © 2026 Livia Rosario - All rights reserved
          </Typography>
        </Container>
      </Box>
    </StyledContainer>
  );
};

export default Footer;
