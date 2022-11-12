import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InveredButton,
} from "./button.styles";

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

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  const CustomeButton = getButton(buttonType);

  return (
    <CustomeButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomeButton>
  );
};

export default Button;
