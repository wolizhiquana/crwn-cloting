import Button from "../../components/button/button.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/filebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") return;
      else console.log(error);
    }
  };

  return (
    <div>
      <h1>登陆页面</h1>
      <Button buttonType="google" onClick={logGoogleUser}>
        使用谷歌账户登陆
      </Button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
