import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { useReduxSelector } from "@/hooks/useRedux";
import Otp from "./otp";
import SignUp from "./sign-up";
import SignIn from "./sign-in";
import { useAuthDialogFeatures } from "./features";

const AuthDialog = () => {
  const [ui, setUi] = useState<"sign-in" | "sign-up" | "otp">("sign-in");
  const { OnSignIn, OnSignUp, OnOtpVerify } = useAuthDialogFeatures();
  const { sign_in, otp } = useReduxSelector(({ auth }) => auth);

  const onSignInHandle = async () => {
    await OnSignIn();
    setUi("otp");
  };

  const onSignUpHandle = async () => {
    OnSignUp();
  };

  const onOtpVerifyHandle = async () => {
    await OnOtpVerify();
  };

  return (
    <div>
      <DialogContent className="sm:max-w-[425px]">
        {ui === "sign-in" && <SignIn />}
        {ui === "sign-up" && <SignUp />}
        {ui === "otp" && <Otp />}
        <DialogFooter>
          {ui === "sign-in" && (
            <Button
              disabled={sign_in.state === "loading" || !sign_in.number}
              onClick={onSignInHandle}
              type="submit"
            >
              Kirish
            </Button>
          )}
          {ui === "sign-up" && (
            <Button onClick={onSignUpHandle} type="submit">
              Ro'yxatdan o'tish
            </Button>
          )}
          {ui === "otp" && (
            <Button
              disabled={
                otp.state === "loading" || otp.verification.length !== 6
              }
              onClick={onOtpVerifyHandle}
              type="submit"
            >
              Tasdiqlash
            </Button>
          )}
        </DialogFooter>
        {ui === "sign-in" && (
          <div className="flex items-center">
            <h3 className="text-sm">
              Akkauntingiz yoqmi?{" "}
              <Button onClick={() => setUi("sign-up")} variant={"link"}>
                Ro'yxatdan o'tish
              </Button>
            </h3>
          </div>
        )}
        {ui === "sign-up" && (
          <div className="flex items-center">
            <h3 className="text-sm">
              Ro'yxatdan o'tganmisiz ?
              <Button onClick={() => setUi("sign-in")} variant={"link"}>
                Kirish!
              </Button>
            </h3>
          </div>
        )}
      </DialogContent>
    </div>
  );
};

export default AuthDialog;
