import React from "react";
import { Home, ShoppingBag, Info, Phone } from "lucide-react";

export interface IHeaderLink {
  display: string;
  url: string;
  icon: React.ReactElement;
  content?: {
    display: string;
    url: string;
    description: string;
  }[];
}

export const headerLinks: IHeaderLink[] = [
  {
    display: "Home",
    url: "/",
    icon: <Home />,
  },
  {
    display: "Products",
    url: "/products",
    icon: <ShoppingBag />,
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
    icon: <Info />,
  },
  {
    display: "Contacts",
    url: "/contacts",
    icon: <Phone />,
  },
];
