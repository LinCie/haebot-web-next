"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Phone } from "lucide-react";

import { headerLinks } from "@/shared/links";
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
import { SidebarTrigger } from "../ui/sidebar";

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
    <header className="fixed inset-x-0 top-0 z-10 bg-background shadow">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-center gap-1 px-4 py-3 md:gap-5">
        <SidebarTrigger className="size-8 md:hidden" />
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
                      <NavigationMenuTrigger>
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
                          "text-foreground hover:text-foreground/70 focus:text-foreground/70",
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
            <Phone
              role="img"
              focusable="false"
              aria-hidden="true"
              className="size-4"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
