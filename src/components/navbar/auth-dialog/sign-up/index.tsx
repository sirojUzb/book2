import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignUp = () => {
  return (
    <div>
      <DialogHeader>
        <DialogTitle>Ro'yxatdan o'tish</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="name" className="text-right">
            Ismingiz
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="User"
            className="col-span-3"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="username" className="text-right">
            Familiyangiz
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="User name"
            className="col-span-3"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label htmlFor="phone-number" className="text-right">
            Telefon raqam:
          </Label>
          <Input
            id="phone-number"
            type="number"
            placeholder="+99899 999 99 99"
            className="col-span-3"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
