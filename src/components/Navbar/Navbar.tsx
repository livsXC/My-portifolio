import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material";

// ===== Estilos =====
export const StyledNavLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
  fontWeight: 500,
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "flex",
    justifyContent: "end",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

// Menu estilizado para versão minimizada (mobile)
export const StyledMobileMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    backgroundColor: "#000",   // fundo preto
    color: "#fff",             // letras brancas
    fontSize: "0.65rem",       // fonte menor
  },
}));

// ===== Links =====
const navLinks = [
  { id: "about", label: "Sobre mim" },
  { id: "experience", label: "Experiências" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Projetos" },
];

// ===== Componente Navbar =====
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#000", boxShadow: "none" }}>
        {/* Mobile */}
        <StyledMobileToolbar>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <StyledMobileMenu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {navLinks.map((link) => (
              <MenuItem key={link.id} onClick={() => handleSmoothScroll(link.id)}>
                <StyledNavLink>{link.label}</StyledNavLink>
              </MenuItem>
            ))}
          </StyledMobileMenu>
        </StyledMobileToolbar>

        {/* Desktop */}
        <StyledDesktopToolbar variant="regular">
          {navLinks.map((link) => (
            <MenuItem key={link.id} onClick={() => handleSmoothScroll(link.id)}>
              <StyledNavLink>{link.label}</StyledNavLink>
            </MenuItem>
          ))}
        </StyledDesktopToolbar>
      </AppBar>
    </Box>
  );
}
