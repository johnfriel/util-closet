interface NavLinkProps {
    text: string;
    target?: string;
}
interface NavLinks {
    left: NavLinkProps[];
    right: NavLinkProps[];
}
interface MobileNavMenuProps {
    navLinks: NavLinks;
}
export declare const NavMenu: ({ navLinks }: MobileNavMenuProps) => import("react/jsx-runtime").JSX.Element;
export default NavMenu;
