'use client';
import { useState } from 'react';
import styles from './styles.module.scss';
import bgImage from 'src/assets/images/jcrb-title.png';

//import React, { useState } from 'react';
export default function Burger() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [tuOpen, setTuOpen] = useState(false);
    const openMenu = () => {
        setTuOpen(true);
    };

    const closeMenu = () => {
        setTuOpen(false);
    };

    const [threeOpen, setThreeOpen] = useState(false);
    const openMenu3 = () => {
        setThreeOpen(true);
    };
    const closeMenu3 = () => {
        setThreeOpen(false);
    };

    return (
        <div className={styles.wrapper} style={{ backgroundImage: `url(${bgImage.src})` }}>
            <nav className={`${styles.menu_open1} ${isOpen ? styles.menu_open1_opened : styles.menu_open1_closed}`}>
                <ul className={styles.menu_open2}>
                    <li className={styles.burger_popup}>
                        <p>Naslovna</p>
                    </li>
                    <li className={styles.burger_popup}>
                        <a href='#' className={styles.hover}>
                            O Nama
                        </a>
                        <ul>
                            <li className={styles.burger_menu2}>
                                <a href='#'>Istorija</a>
                            </li>
                            <li className={styles.burger_menu2}>
                                <a href='#'>Naša Uvijerenja</a>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.burger_popup}>
                        <a href='#help' className={styles.hover}>
                            Dešavanja
                        </a>
                    </li>
                    <li className={styles.burger_popup}>
                        <a href='#footer' className={styles.hover}>
                            Druge Službe
                        </a>
                        <ul>
                            <li className={styles.burger_menu2}>
                                <a href='#'>Kids Club</a>
                            </li>
                            <li className={styles.burger_menu2}>
                                <a href='#'>Tinejdžer</a>
                            </li>
                            <li className={styles.burger_menu2}>
                                <a href='#'>Božićni Program</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <span
                onClick={toggleMenu}
                className={`${styles.burger2} ${isOpen ? styles.burger2_rotate : styles.burger2_no_rotate}`}
            >
                <span className={styles.burger_line}></span>
                <span className={styles.burger_line}></span>
                <span className={styles.burger_line}></span>
            </span>

            <nav id='b_menu' className={styles.menu}>
                <div className={`${styles.logo} ${styles.logo2}`}>
                    <a href='#'>
                        <h1>rijecbozija</h1>
                    </a>
                </div>
                <ul id='menu' className={styles.menu_ul}>
                    <li className={styles.burger_popup}>
                        <p>Naslovna</p>
                    </li>
                    <li className={styles.burger_popup}>
                        <a onClick={openMenu} href='#' className={styles.hover}>
                            O Nama
                        </a>
                        {tuOpen && (
                            <ul className={`${styles.menu_open} ${isOpen ? styles.open : ''}`} onMouseLeave={closeMenu}>
                                <li className={`${styles.burger_menu2} ${styles.padding_menu2}`}>
                                    <a href='#'>Istorija</a>
                                </li>
                                <li className={`${styles.burger_menu2} ${styles.padding_menu2}`}>
                                    <a href='#'>Naša Uvijerenja</a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className={styles.burger_popup}>
                        <a href='#help' className={styles.hover}>
                            Dešavanja
                        </a>
                    </li>
                    <li className={styles.burger_popup}>
                        <a onClick={openMenu3} href='#footer' className={styles.hover}>
                            Druge Službe
                        </a>
                        {threeOpen && (
                            <ul
                                className={`${styles.menu_open} ${isOpen ? styles.open : ''}`}
                                onMouseLeave={closeMenu3}
                            >
                                <li className={`${styles.burger_menu2} ${styles.padding_menu2}`}>
                                    <a href='#'>Kids Club</a>
                                </li>
                                <li className={`${styles.burger_menu2} ${styles.padding_menu2}`}>
                                    <a href='#'>Tinejdžer</a>
                                </li>
                                <li className={`${styles.burger_menu2} ${styles.padding_menu2}`}>
                                    <a href='#'>Božićni Program</a>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
    //  };
}
//function useState(arg0: boolean): [any, any] {
//throw new Error('Function not implemented.');
//}
