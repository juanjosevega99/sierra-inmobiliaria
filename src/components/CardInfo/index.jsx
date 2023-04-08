"use client";

import { useState } from "react";

export function CardInfo() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = async () => {
    const newClient = { name, number };
    // await saveClient(newClient);
    setName("");
    setNumber("");
    window.location.reload();
  };

  return (
    <div>
      <input type="text" placeholder="Nombre" />
      <input type="text" placeholder="Número" />
      <button onClick={handleSubmit}>Te llamamos</button>
    </div>
  );
}
