import React from 'react';
import styles from './Header.module.css';

const Header=()=>{
    return(
        <React.Fragment>
        <header className={styles["main-header"]}>
            <div className={styles["main-header__logo--container"]}>
                {/* <img src="" alt="" /> */}
                <h1>Travel Companion</h1>
            </div>
            <nav className={styles["main-nav"]}>
                <ul className={styles["main-nav__items"]}>
                    <li className={styles["main-nav__item"]}><a href=''>Home</a> </li>
                    <li className={styles["main-nav__item"]}><a href=''>Review</a></li>
                    <li className={styles["main-nav__item"]}><a href=''>Trips</a></li>
                </ul>
                <a className={styles["login"]} href="">Login</a>
            </nav>
        </header>
      </React.Fragment>

    );
}

export default Header;