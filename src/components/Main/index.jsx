"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { Houses } from "../Houses";
import { HousesToRent } from "../HousesToRent";
import { HousesToSell } from "../HousesToSell";

export function Main() {
  const [showComponentSell, setShowComponentSell] = useState(false);
  const [showComponentRent, setShowComponentRent] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);
  const phoneNumber = Number(process.env.NEXT_PUBLIC_PHONE_NUMBER);

  const handleComprarClick = () => {
    setShowComponentRent(false);
    setShowComponentSell(true);
    setLogoClicked(false);
  };

  const handleArrendarClick = () => {
    setShowComponentRent(true);
    setShowComponentSell(false);
    setLogoClicked(false);
  };

  const handleLogoClick = () => {
    setShowComponentRent(false);
    setShowComponentSell(false);
    setLogoClicked(true);
  };

  const handleNumberClick = () => {
    const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE;
    const url = `https://wa.me/57${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url);
  };

  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className={styles.logo}
            onClick={handleLogoClick}
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <a href="#" onClick={handleComprarClick}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" onClick={handleComprarClick}>
                Compra
              </a>
            </li>
            <li>
              <a href="#" onClick={handleArrendarClick}>
                Arrienda
              </a>
            </li>
            <li>
              <a href="#" onClick={handleNumberClick}>
                <img src="/whatsapp.png" alt="WhatsApp" className={styles.whatsappIcon} />
              </a>
            </li>
            <li>
              <a href="#" onClick={handleNumberClick}>
                {phoneNumber}
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {logoClicked ? (
        <Houses />
      ) : showComponentSell ? (
        <HousesToSell />
      ) : showComponentRent ? (
        <HousesToRent />
      ) : (
        <Houses />
      )}
    </div>
  );
}
