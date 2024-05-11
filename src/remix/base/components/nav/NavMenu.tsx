import React, { useState } from 'react';
import { Link } from "@remix-run/react";

interface NavLinkProps {
  text: string;
  target?: string;
}

const NavLink = ({ text, target = '#' }: NavLinkProps) => (
  <li className='flex items-center' style={{ lineHeight: '1' }}>
    <Link to={target} className='text-base' style={{ lineHeight: '1' }}>{text}</Link>
  </li>
);

interface NavLinks {
  left: NavLinkProps[];
  right: NavLinkProps[];
}

interface MobileNavMenuProps {
  navLinks: NavLinks;
}

const CrossIcon = () => (
  <svg className="h-8 w-8 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const HamburgerIcon = () => (
  <div className="space-y-2">
    <span className="block h-0.5 w-8 bg-gray-900"></span>
    <span className="block h-0.5 w-8 bg-gray-900"></span>
    <span className="block h-0.5 w-8 bg-gray-900"></span>
  </div>
);

export const NavMenu = ({ navLinks }: MobileNavMenuProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav>
        <section className="fixed md:hidden block p-4 top-0 right-0 left-0 z-10" style={{ background: `rgba(255, 255, 255, 0.88)` }}>
          <ul className="flex justify-between">
            <NavLink text={navLinks.left[0].text} target={navLinks.left[0].target} />
            <div onClick={() => setIsNavOpen(prev => !prev)}>
              <HamburgerIcon />
            </div>
          </ul>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
              <CrossIcon />
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              {navLinks.left.concat(navLinks.right).map((navLink, i) => (
                <NavLink {...navLink} key={`navLink-${i}`} />
              ))}
            </ul>
          </div>
        </section>

        <section className="hidden md:flex justify-between p-4 fixed top-0 left-0 right-0" style={{ background: `rgba(255, 255, 255, 0.88)` }}>
          <ul className="flex space-x-8">
            {navLinks.left.map((navLink, i) => (
              <NavLink {...navLink} key={`navLink-left-${i}`} />
            ))}
          </ul>
          
          <ul className="flex space-x-8">
            {navLinks.right.map((navLink, i) => (
              <NavLink {...navLink} key={`navLink-right-${i}`} />
            ))}
          </ul>
        </section>
      </nav>
      <style>{`
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
      `}</style>
    </div>
  );
}

export default NavMenu;
