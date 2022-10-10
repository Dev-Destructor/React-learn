import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
  border: 1px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#ffffff" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#ffffff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transform: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#ffffff" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? "#4caf50" : "#ffffff")};
  }
`;

export default StyledButton;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const AnimatedButton = styled.button`
  height: 40hv;
  pointer-events: none;
  animation: ${rotate} infinite 2s linear;
  border: 1px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "#ffffff" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? "#4caf50" : "#ffffff")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.dark.primary};
  background-color: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
