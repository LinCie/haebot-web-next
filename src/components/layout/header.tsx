"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Phone } from "lucide-react";

import haebotLogo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface IHeaderLink {
  display: string;
  url: string;
  content?: {
    display: string;
    url: string;
    description: string;
  }[];
}

const headerLinks: IHeaderLink[] = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "Products",
    url: "/products",
    content: [
      {
        display: "test 1",
        url: "/",
        description: "lorem ipsum dolor sit amet",
      },
      {
        display: "test 2",
        url: "/",
        description: "lorem ipsum dolor sit amet",
      },
      {
        display: "test 3",
        url: "/",
        description: "lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Contacts",
    url: "/contacts",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          href={href || "/"}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 bg-background">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center gap-5 px-4 py-3">
        <Image
          src={haebotLogo}
          alt="HaeBot"
          loading="eager"
          decoding="async"
          className="h-8 w-auto select-none"
        />
        <div className="flex-1">
          <NavigationMenu>
            <NavigationMenuList className="hidden items-center justify-start md:flex">
              {headerLinks.map((headerLink) => {
                const isCurrent = pathname === headerLink.url;

                if (headerLink.content !== undefined) {
                  return (
                    <NavigationMenuItem key={headerLink.display}>
                      <NavigationMenuTrigger className="w-[105px]">
                        {headerLink.display}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {headerLink.content.map((content) => (
                            <ListItem
                              key={content.display}
                              title={content.display}
                              href={content.url}
                            >
                              {content.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={headerLink.display}>
                    <Link href={headerLink.url} legacyBehavior passHref>
                      <NavigationMenuLink
                        aria-current={isCurrent ? "page" : "false"}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "w-[105px] text-foreground hover:text-foreground/70 focus:text-foreground/70",
                          isCurrent &&
                            "text-primary hover:text-primary/70 focus:text-primary/70",
                        )}
                      >
                        {headerLink.display}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>
          <Button>
            Hubungi Kami
            <Phone role="img" focusable="false" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}
