"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import { Houses } from "../Houses";
import { HousesToRent } from "../HousesToRent";
import { HousesToSell } from "../HousesToSell";

export function Main() {
  const [showComponentSell, setShowComponentSell] = useState(false);
  const [showComponentRent, setShowComponentRent] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);

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
    const phoneNumber = "3214223170";
    const message = "Hello, I have a question about your services.";

    const url = `https://wa.me/57${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url);
  };

  return (
    <div>
      <header className={styles.header}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            className="logo"
            width={100}
            height={76}
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
                Comprar
              </a>
            </li>
            <li>
              <a href="#" onClick={handleArrendarClick}>
                Arrendar
              </a>
            </li>
            <li>
              <a href="#" onClick={handleNumberClick}>
                3214223175
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
