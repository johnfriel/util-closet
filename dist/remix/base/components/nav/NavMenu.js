import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from "@remix-run/react";
const NavLink = ({ text, target = '#' }) => (_jsx("li", { className: 'flex items-center', style: { lineHeight: '1' }, children: _jsx(Link, { to: target, className: 'text-base', style: { lineHeight: '1' }, children: text }) }));
const CrossIcon = () => (_jsxs("svg", { className: "h-8 w-8 text-gray-900", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const HamburgerIcon = () => (_jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "block h-0.5 w-8 bg-gray-900" }), _jsx("span", { className: "block h-0.5 w-8 bg-gray-900" }), _jsx("span", { className: "block h-0.5 w-8 bg-gray-900" })] }));
export const NavMenu = ({ navLinks }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (_jsxs("div", { children: [_jsxs("nav", { children: [_jsxs("section", { className: "fixed md:hidden block p-4 top-0 right-0 left-0 z-10", style: { background: `rgba(255, 255, 255, 0.88)` }, children: [_jsxs("ul", { className: "flex justify-between", children: [_jsx(NavLink, { text: navLinks.left[0].text, target: navLinks.left[0].target }), _jsx("div", { onClick: () => setIsNavOpen(prev => !prev), children: _jsx(HamburgerIcon, {}) })] }), _jsxs("div", { className: isNavOpen ? "showMenuNav" : "hideMenuNav", children: [_jsx("div", { className: "absolute top-0 right-0 px-8 py-8", onClick: () => setIsNavOpen(false), children: _jsx(CrossIcon, {}) }), _jsx("ul", { className: "flex flex-col items-center justify-between min-h-[250px]", children: navLinks.left.concat(navLinks.right).map((navLink, i) => (_createElement(NavLink, { ...navLink, key: `navLink-${i}` }))) })] })] }), _jsxs("section", { className: "hidden md:flex justify-between p-4 fixed top-0 left-0 right-0", style: { background: `rgba(255, 255, 255, 0.88)` }, children: [_jsx("ul", { className: "flex space-x-8", children: navLinks.left.map((navLink, i) => (_createElement(NavLink, { ...navLink, key: `navLink-left-${i}` }))) }), _jsx("ul", { className: "flex space-x-8", children: navLinks.right.map((navLink, i) => (_createElement(NavLink, { ...navLink, key: `navLink-right-${i}` }))) })] })] }), _jsx("style", { children: `
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: fixed;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      ` })] }));
};
export default NavMenu;
