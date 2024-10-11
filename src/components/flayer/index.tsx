import type { FC } from "react";
import { Button } from "../ui/button";
import { Heart, ShoppingCart, User } from "lucide-react";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Flayer: FC = () => {
  return (
    <div className="w-[80%] m-auto mt-4">
      <div className="flex justify-between items-center">
        <div className="flex-1 flex gap-4 items-end">
          <Button variant={"link"}>Kitoblar</Button>
          <Button variant={"link"}>To'plamlar</Button>
          <Button variant={"link"}>Mualliflar</Button>
          <Button variant={"link"}>Chegirmalar</Button>
        </div>
        <div className="flex flex-1 gap-2 items-center justify-end">
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: new Date().toLocaleString(),
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
            className="flex gap-2"
            variant={"outline"}
          >
            <ShoppingCart /> Savatcha
          </Button>
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: new Date().toLocaleString(),
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
            className="flex gap-2"
            variant={"outline"}
          >
            <Heart /> Sevimlilar
          </Button>
          <Button
            onClick={() =>
              toast("Event has been created", {
                description: new Date().toLocaleString(),
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
            className="flex gap-2"
            variant={"outline"}
          >
            <User /> Profil
          </Button>
        </div>
      </div>
      <div className="flex gap-4 h-[488px] mt-4">
        <div className="w-[287px] bg-[#f5f5f5] rounded-sm flex flex-col gap-2 items-start">
          <Button variant={"link"}>Badiiy Adabiyotlar</Button>
          <Button variant={"link"}>Bolalar Adabiyoti</Button>
          <Button variant={"link"}>O'quv Adabiyotlar</Button>
          <Button variant={"link"}>Diniy Adabiyotlar</Button>
          <Button variant={"link"}>Ilmiy-ommabop</Button>
          <Button variant={"link"}>Psixologiya</Button>
          <Button variant={"link"}>Biznes Adabiyotlar</Button>
          <Button variant={"link"}>Oila uchun</Button>
          <Button variant={"link"}>She'riyat</Button>
          <Button variant={"link"}>Barcha janrlar</Button>
        </div>
        <div className="w-full rounded-sm flex justify-center">
          <Carousel className="w-[90%] h-[488px]">
            <CarouselContent>
              <CarouselItem>
                <img
                  className="w-full h-[488px]"
                  src="https://th.bing.com/th/id/OIP.b_hhF3LWjRb2Z9pik29cQgHaE8?w=295&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt="random image"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="w-full h-[488px]"
                  src="https://th.bing.com/th/id/OIP.mgFAx357CYlZsSyXXH0wqAHaE8?w=296&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt="random image"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  className="w-full h-[488px]"
                  src="https://th.bing.com/th/id/OIP.TcOHF0IdWzYuvJIqjR9pRgHaE8?w=272&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                  alt="random image"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-[24px]">
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="icons/fast_delivery.svg" alt="fast delivery" />
          <h3 className="mt-4 text-[#107fe4] font-semibold">Yetkazib berish</h3>
          <p className="text-sm text-[#107fe4] mt-2">
            Buyurtmangizni O’zbekiston bo’ylab yetkazib beramiz
          </p>
        </div>
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="icons/book.svg" alt="fast delivery" />
          <h3 className="mt-4 text-[#107fe4] font-semibold">Keng tanlov</h3>
          <p className="text-sm text-[#107fe4] mt-2">
            Istalgan turdagi kitoblarni topishingiz mumkin
          </p>
        </div>
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="icons/credit_card.svg" alt="fast delivery" />
          <h3 className="mt-4 text-[#107fe4] font-semibold">Oson to'lov</h3>
          <p className="text-sm text-[#107fe4] mt-2">
            Istalgan turdagi to‘lov asosida xarid qilishingiz mumkin
          </p>
        </div>
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="icons/guarantee.svg" alt="fast delivery" />
          <h3 className="mt-4 text-[#107fe4] font-semibold">
            Himoyalangan tizim
          </h3>
          <p className="text-sm text-[#107fe4] mt-2">
            Sizning xavfsizligingiz uchun barcha ishlarni qilganmiz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flayer;
