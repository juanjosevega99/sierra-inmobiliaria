import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Houses } from "../components/Houses";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Houses />
    </>
  );
}
