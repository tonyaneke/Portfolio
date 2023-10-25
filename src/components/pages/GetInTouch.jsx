import {
  ArrowSquareOut,
  CopySimple,
  Envelope,
  LinkedinLogo,
  PhoneCall,
} from "@phosphor-icons/react";
import { useState } from "react";
import { GithubLogo, TwitterLogo, WhatsappLogo } from "@phosphor-icons/react";

export const GetInTouch = () => {
  const mail = "anekeanthonyc@gmail.com";
  const phone = "+2348149618418";
  const [copy, setCopy] = useState("");
  const [num, setNum] = useState("");

  return (
    <div className=" mt-20 mx-7 pb-5" id="contact">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        Get in touch
      </p>
      <div className="flex items-center gap-3 mt-5">
        <Envelope size={30} /> {mail}{" "}
        <button
          onClick={() => {
            navigator.clipboard.writeText(mail);
            setCopy("copied");

            setTimeout(() => {
              setCopy("");
            }, 2000);
          }}
        >
          <CopySimple size={20} />
        </button>
        {copy}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <PhoneCall size={30} /> {phone}{" "}
        <button
          onClick={() => {
            navigator.clipboard.writeText(phone);
            setNum("copied");

            setTimeout(() => {
              setNum("");
            }, 2000);
          }}
        >
          <CopySimple />
        </button>
        {num}
      </div>
      <h1 className="font-bold text-2xl mt-5">Get In Touch</h1>
      <p className="mt-3 max-w-xl text-left text-lg">
        Are you looking for Pixel-Perfect, Cross-Platform Mobile App? Want apps
        that truly shine? 📱✨ Slide into my DMs and let&apos;s transform your
        ideas into reality!
      </p>
      <p className="mt-5">
        <a
          href="mailto:anekeanthonyc@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowSquareOut size={40} color="gray" />
        </a>
      </p>

      <div className="mt-10">
        <p className="text-center font-semibold">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center mt-5 gap-5">
          <a
            href="https://github.com/tonyaneke"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <GithubLogo size={30} />
          </a>
          <a
            href="https://twitter.com/tonyster_"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <TwitterLogo size={30} />
          </a>
          <a
            href="https://wa.me/08149618418"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <WhatsappLogo size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-aneke-9486aa245/"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
          >
            <LinkedinLogo size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
