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
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

export function AppSidebar() {
  return (
    <Sidebar className="md:hidden" variant="sidebar" collapsible="offcanvas">
      {/* Sidebar Header */}
      <SidebarHeader>
        <div>
          <Image
            src={haebotLogo}
            alt="HaeBot"
            loading="lazy"
            decoding="async"
            className="h-8 w-auto select-none"
          />
        </div>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {headerLinks.map((link) => {
              // Render collapsible menu if content exists (child items)
              if (link.content !== undefined) {
                return (
                  <Collapsible key={link.display} className="group/collapsible">
                    <SidebarMenuItem>
                      {/* Collapsible Toggle */}
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          {link.icon}
                          <span>{link.display}</span>
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      {/* Nested menu items */}
                      <CollapsibleContent className="data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden">
                        <SidebarMenuSub>
                          {link.content.map((content) => {
                            return (
                              <SidebarMenuSubItem key={content.display}>
                                <a href={content.url}>
                                  <span>{content.display}</span>
                                </a>
                              </SidebarMenuSubItem>
                            );
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              }

              // Render a regular menu if content doesn't exist
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
