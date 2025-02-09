'use client';

import IconLinks from '@/components/icons/IconLinks';
import Menu from './Menu';
import { useState } from 'react';
import Link from 'next/link';
import { useTitleNav } from '@/contexts/TitleNavContext';
import { usePathname } from 'next/navigation';
import Breadcrumbs from './Breadcrumbs';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isTitleInNav } = useTitleNav();
  const pathname = usePathname();

  // const breadcrumb = pathname.split('/');

  // console.log(breadcrumb.length);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <header
      className={`header  fixed left-0 right-0 top-0 z-20 mx-auto flex min-h-[70px] w-full items-center justify-between border-b-2 border-[rgba(var(--green-opac),0.5)] px-[5%] py-[2rem] backdrop-blur-sm xsmall:min-h-[103px] xsmall:py-[3rem] small:px-layout-small ${toggleMenu ? 'bg-transparent' : 'bg-[rgba(var(--background-opac),0.5)]'} `}
      id="header"
    >
      <div className={`relative transition-all duration-300 ${toggleMenu ? "translate-y-[-110%] opacity-0 xsmall:translate-y-0 small:opacity-100 z-20" : "opacity-100" }`}>
        <Link
          href="/"
          aria-label="Link to homepage"
          className={`name__title block min-h-[44px] content-center font-font_anonymous text-[clamp(2.5rem,1.9vw,3.6rem)] transition-all duration-300 hover:text-theme_green ${isTitleInNav ? 'opacity-100' : pathname == '/' ? 'opacity-0' : 'opacity-100'}`}
        >
          Stuart Bloxham
          <span className="small:hidden">.</span>
        </Link>
          <Breadcrumbs position='inHeader'/>
      </div>

      <div
        className={`icon__links tablet:block absolute bottom-0 left-[5%] right-0 top-0 z-20 m-auto ml-0 hidden h-fit w-fit transition-opacity duration-500 xsmall:left-0 xsmall:ml-auto ${
          toggleMenu ? 'pointer-events-none opacity-0' : 'opacity-100 delay-300'
        }`}
      >
        <IconLinks />
      </div>

      <button
        className={`menu__btn fixed right-[5%] top-[2.7rem] small:top-[3.5rem] z-20 ml-auto min-h-[3rem] w-fit cursor-pointer font-font_anonymous text-[3rem] uppercase leading-none transition-colors duration-300 hover:text-theme_green xsmall:min-h-[5rem] ${toggleMenu ? 'active top-12 small:right-0 small:mr-[clamp(7rem,7vw,12rem)]' : ''}`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <div className="menu__lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="w-0 opacity-0 xsmall:w-fit xsmall:opacity-100">menu</span>
      </button>

      <div className="menu__container inset-0 z-10">
        <button
          className={`menu__background__close absolute left-[-50%] top-0 -z-10 h-screen w-[200vw] bg-background backdrop-blur-3xl transition-opacity duration-500 ${toggleMenu ? 'pointer-events-auto opacity-70' : 'pointer-events-none opacity-0'}`}
          onClick={() => setToggleMenu(!toggleMenu)}
          aria-label="Close Menu Overlay"
        ></button>

        <div
          className={`menu fixed right-0 top-0 z-10 w-[70vw] min-w-[340px] max-w-[700px] items-end justify-end transition-all delay-200 duration-300 before:absolute before:inset-0 before:-z-10 before:bg-foreground before:opacity-10 before:backdrop-blur-3xl before:content-[""] small:-right-[clamp(7rem,7vw,12rem)] ${toggleMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <div
            className={`menu__icon__links absolute bottom-auto left-[5%] right-auto top-8 z-20 m-auto ml-auto h-fit w-[50vw] max-w-[700px] small:top-[3.7rem] translate-y-2 transition-opacity duration-1000 xsmall:top-12 ${toggleMenu ? 'opacity-100' : 'opacity-0'}`}
          >
            <IconLinks menuIsOpen={toggleMenu} />
          </div>
          <Menu menuIsOpen={toggleMenu} closeMenu={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
