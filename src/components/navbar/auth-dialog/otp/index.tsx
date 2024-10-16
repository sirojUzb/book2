import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useReduxDispatch } from "@/hooks/useRedux";
import { setOtp } from "@/redux/slices/auth";
import { DialogDescription } from "@radix-ui/react-dialog";

const Otp = () => {
  const dispatch = useReduxDispatch();

  return (
    <div>
      <DialogHeader>
        <DialogTitle>OTP</DialogTitle>
        <DialogDescription>
          Telefoningizga yuborilgan bir martalik SMS-kodni kiriting
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex items-start justify-center gap-2 mt-2">
          <InputOTP
            onChange={(e) => dispatch(setOtp({ verification: e }))}
            maxLength={6}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    </div>
  );
};

export default Otp;
