import { BaseButton, GoogleSignInButton, InveredButton } from "./button.styles";

export const BUTTON_TYPE_CLASSED = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSED.base) =>
  ({
    [BUTTON_TYPE_CLASSED.base]: BaseButton,
    [BUTTON_TYPE_CLASSED.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSED.inverted]: InveredButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomeButton = getButton(buttonType);

  return <CustomeButton {...otherProps}>{children}</CustomeButton>;
};

export default Button;
