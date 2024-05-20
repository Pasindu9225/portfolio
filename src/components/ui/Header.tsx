"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const Navlist = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Me", path: "/AboutMe" },
    { id: 3, name: "My Project", path: "/MyProject" },
    { id: 4, name: "Contact Me", path: "/ContactMe" },
  ];

  return (
    <div>
      <header className="bg-white border-b dark:bg-gray-900">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a
            className="block font-bold text-3xl text-teal-600 dark:text-teal-400"
            href="/"
          >
            Pasindu
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {Navlist.map(
                  (item: {
                    id: React.Key | null | undefined;
                    path: string | undefined;
                    name:
                      | string
                      | number
                      | bigint
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<React.AwaitedReactNode>
                      | null
                      | undefined;
                  }) => (
                    <li key={item.id}>
                      <a
                        className="text-gray-500 dark:text-gray-300 transition text-md hover:text-gray-800 dark:hover:text-white"
                        href={item.path}
                      >
                        {item.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* <SignedIn> */}
                {/* Display User Button when signed in */}
                {/* <UserButton /> */}
                {/* </SignedIn> */}
                {/* <SignedOut> */}
                {/* Display Sign In button when signed out */}
                {/* <SignInButton /> */}
                {/* </SignedOut> */}
              </div>

              <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-700 dark:text-gray-300 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
