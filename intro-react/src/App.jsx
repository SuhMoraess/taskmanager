import { useState } from "react";

function App() {
  const [message, setMessage]= useState("Olá Mundo");
  return (
    <>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, foi clicado!")
        }}
      >
        Mudar mensagem
      </button>
    </>
  );
}

export default App;
