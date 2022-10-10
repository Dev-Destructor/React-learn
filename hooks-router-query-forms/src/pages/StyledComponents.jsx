import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StyledButton, {
  AnimatedButton,
  DarkButton,
  FancyButton,
} from "../components/styled/button.styles";

const theme = {
  dark: {
    primary: "#000000",
    text: "#ffffff",
  },
  light: {
    primary: "#ffffff",
    text: "#000000",
  },
  fontFamily: 'roboto'
};

const GlobalStyle = createGlobalStyle`
    button {
        font-family: ${(props) => props.theme.fontFamily}
    }
`;

function StyledComponents() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <StyledButton type="submit">Click Me</StyledButton>
        <br />
        <StyledButton variant="outline">Click Me</StyledButton>
        <br />
        <FancyButton as="a">Fancy</FancyButton>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AnimatedButton as="a">Rotate</AnimatedButton>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default StyledComponents;
