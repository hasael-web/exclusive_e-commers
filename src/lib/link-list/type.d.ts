declare module "MenuLink" {
  import SubMenuLink from "SubMenuLink";
  const MenuLink: {
    title: string;
    sub_menu?: Array<typeof SubMenuLink>;
    link: string;
  };
  export default MenuLink;
}

declare module "SubMenuLink" {
  const SubMenuLink: {
    title: string;
    link: string;
  };

  export default SubMenuLink;
}
