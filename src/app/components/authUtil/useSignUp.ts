import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type SignUpProps = {
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
};


export const useSignUp = ({ setIsLoginOpen }: SignUpProps) => {
  const navigate = useNavigate();

  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      alert(`Account created succesfully for: ${userCredential.user.email}`);
      setIsLoginOpen(false);
      navigate('/for-you');
    } catch (error: unknown) {
      if (error instanceof Error) {
        const firebaseError = error as Error & { code?: string; };

        switch (firebaseError.code) {
          case "auth/email-already-in-use":
            alert("This email is already registered.");
            break;
          case "auth/weak-password":
            alert("Password should be at least 6 characters.");
            break;
          case "auth/invalid-email":
            alert("Please enter a valid email address.");
            break;
          default:
            alert(error.message);
        }
      }
    };

  };

  return signup;
};