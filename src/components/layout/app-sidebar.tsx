import Image from "next/image";
import haebotLogo from "@/assets/logo.png";

import { headerLinks } from "@/shared/links";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar
      className="block md:hidden"
      variant="sidebar"
      collapsible="offcanvas"
    >
      <SidebarHeader>
        <div>
          <Image
            src={haebotLogo}
            alt="HaeBot"
            loading="eager"
            decoding="async"
            className="h-8 w-auto select-none"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {headerLinks.map((link) => {
              return (
                <SidebarMenuItem key={link.display}>
                  <SidebarMenuButton asChild>
                    <a href={link.url}>
                      {link.icon}
                      <span>{link.display}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
