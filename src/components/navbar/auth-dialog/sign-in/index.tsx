import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignIn } from "@/redux/slices/auth";

const SignIn = () => {
  const dispatch = useReduxDispatch();
  const {
    sign_in: { number },
  } = useReduxSelector(({ auth }) => auth);
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Telefon raqamingizni kiriting</DialogTitle>
        <DialogDescription>
          Telefon raqamingizni kiriting va biz sizga bir martalik SMS-kod
          yuboramiz
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="number" className="text-right">
            Telefon raqam:
          </Label>
          <Input
            placeholder="+99899 999 99 99"
            onChange={(e) => dispatch(setSignIn({ number: e.target.value }))}
            id="number"
            type="number"
            value={number}
            className="col-span-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
