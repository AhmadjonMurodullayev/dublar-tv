"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useToggle } from "@uidotdev/usehooks";
import { MenuIcon } from "@/assets/icons/menu-icon";
import Image from "next/image";


export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useToggle(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)} variant={"outline"}>
        <MenuIcon/>
      </Button>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-[300px] p-0 overflow-auto bg-[#5151518C]">
           <div>
              <Image src={"/777.svg" } width={200} height={90} alt="logo"/>
           </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
