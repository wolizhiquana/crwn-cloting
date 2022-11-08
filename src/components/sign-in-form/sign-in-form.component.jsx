import { useState } from "react";

import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/filebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form-styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("邮箱或密码错误");
          break;
        case "auth/user-not-found":
          alert("用户不存在");
          break;
        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") return;
      else console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>我有一个账户?</h2>
      <span>使用邮箱和密码登陆</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="邮箱"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="密码"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">登陆</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            谷歌登陆
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;