'use client';

import IconLinks from '@/components/icons/IconLinks';
import Menu from './Menu';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header
      className={`header fixed left-0 right-0 top-0 z-20 mx-auto flex w-full items-center justify-between border-b-2 border-[rgba(var(--green-opac),0.5)] py-20 backdrop-blur-sm xsmall:py-20 small:px-layout-small ${toggleMenu ? 'bg-transparent' : 'bg-[rgba(var(--background),0.3)]'}`}
    >
      <div
        className={`icon__links absolute bottom-0 left-[5%] right-0 top-0 z-20 m-auto ml-0 h-fit w-fit transition-opacity duration-500 xsmall:left-0 xsmall:ml-auto ${
          toggleMenu ? 'pointer-events-none opacity-0' : 'opacity-100 delay-300'
        }`}
      >
        <IconLinks />
      </div>

      <button
        className={`menu__btn fixed right-[5%] top-10 z-20 ml-auto w-fit cursor-pointer font-font_anonymous text-[3rem] uppercase transition-colors duration-300 hover:text-theme_green ${toggleMenu ? 'active top-12 small:right-0 small:mr-[clamp(7rem,7vw,12rem)]' : ''}`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className="menu__lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        menu
      </button>

      <div className="menu__container inset-0 z-10">
        <button
          className={`menu__background__close absolute left-[-50%] top-0 -z-10 h-screen w-[200vw] bg-background backdrop-blur-3xl transition-opacity duration-500 ${toggleMenu ? 'pointer-events-auto opacity-70' : 'pointer-events-none opacity-0'}`}
          onClick={() => setToggleMenu(!toggleMenu)}
          aria-label="Close Menu Overlay"
        ></button>

        <div
          className={`menu fixed right-0 top-0 z-10 w-[55vw] min-w-[340px] max-w-[700px] items-end justify-end transition-all delay-200 duration-300 before:absolute before:inset-0 before:-z-10 before:bg-foreground before:opacity-10 before:backdrop-blur-3xl before:content-[""] small:-right-[clamp(7rem,7vw,12rem)] ${toggleMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <div
            className={`menu__icon__links absolute bottom-auto left-[5%] right-auto top-12 z-20 m-auto ml-auto h-fit w-[50vw] max-w-[700px] translate-y-2 transition-opacity duration-1000 ${toggleMenu ? 'opacity-100' : 'opacity-0'}`}
          >
            <IconLinks menuIsOpen={toggleMenu} />
          </div>
          <Menu menuIsOpen={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
