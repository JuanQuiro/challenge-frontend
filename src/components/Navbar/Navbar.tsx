import React from "react";
import { Image, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

export default function App() {
  const menuItems = [
    "Home",
    "Products",
    "Resources",
    "Pricing",
  ];

  return (
    <Navbar >

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Image
            width={30}
            src="/logo.png"
          />
          <p className="font-bold pl-1  pr-7 text-black">Untitled UI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image
            width={30}
            src="/logo.png"
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
          <Button as={Link} color="warning" className="hidden sm:flex bg-primary text-white" href="#" variant="flat">
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
    </Navbar>
  );
}

