import MenuLink from "MenuLink";

type TMenuLink = typeof MenuLink;

const MENU_LINK: Array<TMenuLink> = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Sign Up",
    link: "/sign-up",
  },
  {
    title: "Sign In",
    link: "/sign-in",
  },
];

export { MENU_LINK };
