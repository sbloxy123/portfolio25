import { motion } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { href: '/', title: 'Home' },
  { href: '/#about__me', title: 'About Me' },
  { href: '/#experience', title: 'experience' },
  { href: '/projects', title: 'Projects' },
  { href: '/#stack', title: 'Stack' },
  { href: 'Stuart-Bloxham-CV-web-developer.pdf', title: 'CV' },
  { href: '/#footer', title: 'Contact' },
];

const menuContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.4,
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const menuItem = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0 },
};

const MenuItem = ({
  href,
  children,
  closeMenu,
}: {
  href: string;
  children: string;
  closeMenu: () => void;
}) => {
  return (
    <motion.li variants={menuItem}>
      <Link
        href={href}
        className="ml-auto block w-fit min-w-[140px] text-right font-font_anonymous text-[4.8rem] uppercase text-foreground transition-colors duration-300 hover:text-theme_green"
        onClick={() => closeMenu()}
      >
        {children}
      </Link>
    </motion.li>
  );
};

const Menu = ({ menuIsOpen, closeMenu }: { menuIsOpen: boolean; closeMenu: () => void }) => {
  return (
    <motion.ul
      variants={menuContainer}
      initial="hidden"
      animate={menuIsOpen ? 'show' : 'hidden'}
      className={`menu__list block h-screen pr-[5vw] pt-[150px] small:mr-[clamp(7rem,7vw,12rem)] small:pr-[clamp(7rem,7vw,12rem)] ${menuIsOpen ? 'active' : ''}`}
    >
      {menuItems.map((item, index) => (
        <MenuItem key={index} href={item.href} closeMenu={closeMenu}>
          {item.title}
        </MenuItem>
      ))}
    </motion.ul>
  );
};

export default Menu;
