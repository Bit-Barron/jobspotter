import create from "zustand";
import { useSignUp, useAuth } from "@clerk/clerk-expo";

type AuthStore = {
  emailAddress: string;
  password: string;
  username: string;
  code: string;
  error: string;
  pendingVerification: boolean;
  setEmailAddress: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setCode: (code: string) => void;
  setError: (error: string) => void;
  setPendingVerification: (pending: boolean) => void;
  resetState: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  emailAddress: "",
  password: "",
  username: "",
  code: "",
  error: "",
  pendingVerification: false,
  setEmailAddress: (email) => set({ emailAddress: email }),
  setPassword: (password) => set({ password: password }),
  setUsername: (username) => set({ username: username }),
  setCode: (code) => set({ code: code }),
  setError: (error) => set({ error: error }),
  setPendingVerification: (pending) => set({ pendingVerification: pending }),
  resetState: () =>
    set({
      emailAddress: "",
      password: "",
      username: "",
      code: "",
      error: "",
      pendingVerification: false,
    }),
}));

export const useAuthActions = () => {
  const { signUp, setActive } = useSignUp();
  const { signOut } = useAuth();
  const { setError, setPendingVerification, resetState } = useAuthStore();

  const onSignUpPress = async (
    emailAddress: string,
    username: string,
    password: string
  ) => {
    try {
      await signUp?.create({
        emailAddress,
        username,
        password,
      });

      await signUp?.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
      setError("");
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors?.[0]?.message || "An error occurred during sign up");
    }
  };

  const onPressVerify = async (code: string) => {
    try {
      const completeSignUp = await signUp?.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp?.status === "complete") {
        if (setActive) {
          await setActive({ session: completeSignUp.createdSessionId });
        } else {
          setError("Failed to set active session.");
          return false;
        }
        return true;
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
        setError("Verification failed. Please try again.");
        return false;
      }
    } catch (err: any) {
      setError(
        err.errors?.[0]?.message || "An error occurred during verification"
      );
      return false;
    }
  };

  const onLogout = async () => {
    try {
      await signOut();
      resetState();
      return true;
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.message || "An error occurred during logout");
      return false;
    }
  };

  return { onSignUpPress, onPressVerify, onLogout };
};
