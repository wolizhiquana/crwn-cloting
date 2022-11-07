import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/filebase/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>登陆页面</h1>
      <button onClick={logGoogleUser}>使用谷歌账户登陆</button>
    </div>
  );
};

export default SignIn;
