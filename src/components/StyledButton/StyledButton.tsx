import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

// Estilos personalizados do botão
const CustomButton = styled(Button)({
  borderRadius: 12,
  padding: "10px 18px",
  textTransform: "none",
  fontWeight: 500,
  boxShadow: "none",
  transition: "all 0.3s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  "&:hover": {
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
});

// Componente que aceita todas as props do MUI Button
const StyledButton: React.FC<ButtonProps> = (props) => {
  return <CustomButton {...props} />;
};

export default StyledButton;