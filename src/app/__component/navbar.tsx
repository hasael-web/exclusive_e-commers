"use client";

import { MENU_LINK } from "@/lib/link-list/menu-link";
import Container from "./container";
import { Heading } from "./typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useCallback } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  ``;
  const checkRouter = useCallback(
    (url: string) => {
      return pathName === url;
    },
    [pathName]
  );

  return (
    <Container className=" py-8  border-b-2 border-gray-400 bg-zinc-50 ">
      <div className="flex justify-between items-center">
        <div className="cursor-pointer active:scale-95 duration-100">
          <Link href={"/"}>
            <Heading>Exclusive</Heading>
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center gap-2">
          {MENU_LINK.map((menu, idx) => {
            const isActiveRouter = checkRouter(menu.link);
            return (
              <Link key={`${menu.link}-${idx}`} href={menu.link}>
                <Button key={`${menu.title}-${idx}`} variant="ghost">
                  <p
                    className={`${
                      isActiveRouter
                        ? "border-b border-gray-900 clr-title-active text-lg font-semibold duration-150 ease-out"
                        : ""
                    }`}
                  >
                    {menu.title}
                  </p>
                </Button>
              </Link>
            );
          })}
        </div>
        <div className="rounded-sm bg-zinc-200  flex items-center gap-1">
          <Input placeholder="What are you looking for?" inputMode="search" />
          <Button className="px-2" variant="ghost">
            <Search size={20} />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
