import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    
  };
  return (
    <div>
      <button onClick={logGoogleUser}>sign in with google pop up</button>
    </div>
  );
};
export default SignIn;
