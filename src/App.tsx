import { useState } from "react";

export const App = () => {
  const [text, setText] = useState("");

  const handleCrypt = () => {
    const alphabet: string = "abcdefghijklmnopqrstuvwxyz";

    setText(
      text
        .split(" ")
        .map((word) => {
          return word
            .split("")
            .map((letter) => {
              const lowercaseLetter = letter.toLowerCase();
              if (alphabet.includes(lowercaseLetter)) {
                const position = alphabet.indexOf(lowercaseLetter) + 1;
                return "quack".repeat(position);
              } else {
                return letter;
              }
            })
            .join("-");
        })
        .join("~")
    );
  };

  const handleDecrypt = () => {
    setText(
      text
        .split("~")
        .map((word) => {
          return word
            .split("-")
            .map((segment) => {
              if (segment.includes("quack")) {
                const quacksCount = segment.split("quack").length - 1;
                const alphabetIndex = quacksCount - 1;
                return String.fromCharCode(97 + alphabetIndex);
              } else {
                return segment;
              }
            })
            .join("");
        })
        .join(" ")
    );
  };

  return (
    <div className="w-screen h-screen flex items-start justify-center bg-[#28243D] text-zinc-200">
      <form className="pt-16 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold uppercase">Encriptador de pato</h1>

        <h2 className="text-lg font-bold uppercase pt-4">
          Digite o seu texto:
        </h2>

        <textarea
          className="mt-10 bg-[#312D4B] w-[600px] p-4 outline-none rounded-md shadow-lg"
          cols={30}
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="pt-6 flex flex-row gap-4">
          <button
            type="button"
            className="w-[150px] border-2 border-[#9764FD] px-4 py-2 rounded-md hover:bg-[#9764FD] hover:text-zinc-200 transition-colors duration-200 text-md font-semibold uppercase shadow-lg"
            onClick={handleDecrypt}
          >
            Desencriptar
          </button>
          <button
            type="button"
            className="w-[150px] border-2 border-[#9764FD] px-4 py-2 rounded-md hover:bg-[#9764FD] hover:text-zinc-200 transition-colors duration-200 text-md font-semibold uppercase shadow-lg"
            onClick={handleCrypt}
          >
            Encriptar
          </button>
        </div>
      </form>
    </div>
  );
};
