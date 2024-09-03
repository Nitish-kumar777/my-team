"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { TiThMenuOutline } from 'react-icons/ti';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">TeamLogo</Link>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        <TiThMenuOutline size={24} />
      </button>
      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;