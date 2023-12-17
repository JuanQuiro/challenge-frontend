import React from "react";
import {
  Navbar as NavbarNextjs,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "./Logo.png";

export default function Navbar() {
  const menuItems = ["Home", "Products", "Resources", "Pricing"];

  return (
    <NavbarNextjs>
      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Image
            src={logo}
            width={50}
            height={50}
            quality={100}
            alt="Picture of the author"
          />
          <p className="font-bold pl-1  pr-7 text-black">Untitled UI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            src={logo}
            width={40}
            height={40}
            quality={100}
            alt="Picture of the author"
          />
          <p className="font-bold pl-1 pr-7 text-black">Untitled UI</p>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-slate-600 hover:text-black"
              href="#"
              size="md"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#" className="text-black font-semibold">
            Log In
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            className="hidden sm:flex bg-primary text-white"
            href="#"
            variant="flat"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <div className="flex sm:hidden text-black">
            <NavbarMenuToggle />
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black hover:text-white"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarNextjs>
  );
}
