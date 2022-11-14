import { ComponentPropsWithoutRef, forwardRef, Ref } from "react";
import {
  BaseButton,
  ButtonSpinner,
  GoogleSignInButton,
  InveredButton,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSED {
  base = "base",
  google = "google-sign-in",
  inverted = "inverted",
}

const getButton = (buttonType = BUTTON_TYPE_CLASSED.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSED.base]: BaseButton,
    [BUTTON_TYPE_CLASSED.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSED.inverted]: InveredButton,
  }[buttonType]);

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  buttonType?: BUTTON_TYPE_CLASSED;
  isLoading?: boolean;
}

const Button = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}: ButtonProps) => {
  const CustomeButton = getButton(buttonType);

  return (
    <CustomeButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomeButton>
  );
};

export default Button;
