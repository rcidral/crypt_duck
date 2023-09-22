import { useState } from "react";

export const App = () => {
  const [text, setText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);

  const handleCrypt = () => {
    const textToEncrypt = isEncrypted ? encryptedText : text;
    const encrypted = textToEncrypt
      .split("")
      .map((char) => (char === " " ? " " : "quack"))
      .join("");
    setEncryptedText(encrypted);
    setIsEncrypted(true);
  };

  const handleDecrypt = () => {
    const decrypted = encryptedText
      .split("quack")
      .map((segment) => {
        if (segment === " ") {
          return " ";
        }
        return "a".repeat(segment.length);
      })
      .join("");
    setEncryptedText(decrypted);
    setIsEncrypted(false);
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
          value={isEncrypted ? encryptedText : text}
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
