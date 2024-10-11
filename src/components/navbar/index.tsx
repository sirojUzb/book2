import { useState, type FC } from "react";
import { Button } from "../ui/button";
import { Facebook, Instagram, Languages, Search, Twitter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "../ui/input";

const Navbar: FC = () => {
  const [language, setLanguage] = useState("uz");

  return (
    <div className="w-[80%] m-auto">
      <div className="flex justify-between items-center h-[59px]">
        <div className="flex flex-1 gap-4 items-end">
          <img src={"/icons/logo.svg"} alt="logo" />
          <h3>Kitob - eng yaxshi sovg'a</h3>
          <Button className="ml-10 pb-0" variant={"link"}>
            Qanday xarid qilinadi?
          </Button>
        </div>
        <div className="flex gap-4 flex-1 items-end justify-end">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant={"ghost"}>
                <Search />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Want to search books?</AlertDialogTitle>
                <AlertDialogDescription>
                  <Input
                    type="search"
                    className="w-full"
                    placeholder="Search"
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Search</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Languages />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Change Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={language}
                onValueChange={setLanguage}
              >
                <DropdownMenuRadioItem value="en">EN</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="uz">UZ</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ru">RU</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="pb-0" variant={"link"}>
            +998777771565
          </Button>
          <Button variant={"outline"}>
            <Facebook />
          </Button>
          <Button variant={"outline"}>
            <Instagram />
          </Button>
          <Button variant={"outline"}>
            <Twitter />
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
