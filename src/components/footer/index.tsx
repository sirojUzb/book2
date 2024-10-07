import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full h-[360px] bg-black">
      <div className="w-[80%] m-auto flex justify-between items-center gap-4">
        <div className="w-[290px] h-[230px] py-8">
          <img src="/icons/logo.svg" alt="book-logo" />
          <div className="flex flex-col text-white justify-start w-[180px] mt-3">
            <h3 className="font-semibold text-sm">Kitob - eng yaxshi sovg'a</h3>
            <p className="text-xs mt-3">
              Ushbu kitobda muallif haqiqiy rahbar qanday bo'lishi va qo'l
              ostidagilariga qanday
            </p>
          </div>
        </div>
        <div className="w-[290px] h-[230px] py-8 text-white">
          <h3 className="text-l font-bold">MENU</h3>
          <p className="mt-4">Biz haqimizda</p>
          <p className="mt-2">Qanday xarid qilinadi</p>
          <p className="mt-2">Yetkazib berish</p>
          <p className="mt-2">Filial va dilerlar</p>
        </div>
        <div className="w-[290px] h-[230px] py-8 text-white">
          <h3 className="text-l font-bold">KONTAKTLAR</h3>
          <div className="mt-4 flex gap-2">
            <img src="/icons/phone-icon.svg" alt="phone-icon" />
            <p>+998 71 275 64 84</p>
          </div>
          <div className="mt-2 flex gap-2">
            <img src="/icons/email-icon.svg" alt="phone-icon" />
            <p>info@book.uz</p>
          </div>
          <div className="mt-2 flex gap-2">
            <img src="/icons/location-icon.svg" alt="phone-icon" />
            <p>Chilonzor-8, Qatortol ko'chasi 60</p>
          </div>
          <div className="mt-2 flex gap-4">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <div className="w-[290px] h-[230px] py-8 text-white">
          <h3 className="text-l font-bold uppercase">ilovani yuklab olish</h3>
          <div className="mt-6">
            <div className="w-[190px] flex gap-2 bg-[#ffff] rounded-[8px] items-center py-[12px] px-[24px] cursor-pointer">
              <div>
                <img
                  src="/icons/app_store.svg"
                  alt=""
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div className="text-black">
                <p>Download on</p>
                <h3 className="font-semibold">App Store</h3>
              </div>
            </div>
            <div className="w-[190px] flex gap-2 bg-[#ffff] rounded-[8px] items-center py-[12px] px-[24px] mt-2 cursor-pointer">
              <div>
                <img
                  src="/icons/google_play.svg"
                  alt=""
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div className="text-black">
                <p>Download on</p>
                <h3 className="font-semibold">Google Play</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto">
        <div className="mt-10">
          <Separator />
        </div>
        <div className="mt-3 flex justify-between">
          <div className="text-white">
            <p>© 2024 Book.uz</p>
          </div>
          <div className="text-white flex justify-between gap-6">
            <p>Ommaviy oferta</p>
            <p>Politika</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
