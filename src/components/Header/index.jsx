import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export function Header() {
  const handleComprarClick = () => {};
  {
    // Do something when "Comprar" link is clicked
  }
  const handleArrendarClick = () => {
    " ";
  };
  {
    // Do something when "Arrendar" link is clicked
  }
  const handleNumberClick = () => {
    const phoneNumber = '3214223170';
    const message = 'Hello, I have a question about your services.';
  
    const url = `https://wa.me/57${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(url);
  };
  
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Logo"
          className="logo"
          width={100}
          height={76}
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
  );
}
