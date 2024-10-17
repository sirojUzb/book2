import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setOtp, setSignIn } from "@/redux/slices/auth";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";
type ON_SIGN_IN = () => Promise<void>;
type ON_SIGN_UP = () => Promise<void>;
type ON_OTP_VERIFY = () => Promise<void>;

type AuthDialogFeatures = {
  OnSignIn: ON_SIGN_IN;
  OnSignUp: ON_SIGN_UP;
  OnOtpVerify: ON_OTP_VERIFY;
};

export const useAuthDialogFeatures = (): AuthDialogFeatures => {
  const { sign_in, otp } = useReduxSelector(({ auth }) => auth);
  const dispatch = useReduxDispatch();
  const signIn = useSignIn();

  const OnSignIn: ON_SIGN_IN = async () => {
    dispatch(setSignIn({ state: "loading" }));
    await axios({
      url: "https://book-uz-beckend.onrender.com/api/auth/sign-in",
      method: "POST",
      data: { phoneNumber: `+${sign_in.number}` },
    });

    dispatch(setSignIn({ state: null }));
  };

  const OnSignUp: ON_SIGN_UP = async () => {};
  const OnOtpVerify: ON_OTP_VERIFY = async () => {
    dispatch(setOtp({ state: "loading" }));
    const { data } = await axios({
      url: "https://book-uz-beckend.onrender.com/api/auth/verify-otp",
      method: "POST",
      data: {
        phoneNumber: `+${sign_in.number}`,
        otpCode: Number(otp.verification),
      },
    });
    signIn({
      auth: {
        token: data?.data?.token,
        type: "Bearer",
      },
      userState: data?.data?.user,
    });

    dispatch(setOtp({ state: null }));

    window.location.reload();
  };

  return {
    OnSignIn,
    OnSignUp,
    OnOtpVerify,
  };
};
