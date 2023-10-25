import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import pic from "./../../assets/profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export const About = () => {
  return (
    <div className=" mt-20 mx-7 pb-5 overflow-x-hidden" id="about">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        About Me
      </p>
      <div className="flex justify-evenly items-center mt-5 flex-wrap gap-5">
        <img
          src={pic}
          alt="my Picture"
          className="w-96 object-cover object-top"
          data-aos="fade-right"
        />

        <div className="max-w-2xl" data-aos="fade-left">
          <h1 className="text-3xl font-bold">
            Want to know more about me? Here&apos;s more information:
          </h1>

          <p className="mt-5">
            I am a React Native Developer dedicated to providing advanced mobile
            solutions using React Native technology. I am very passionate about
            improving my coding skills and developing Web2.0 & Web3.0 mobile
            applications.
          </p>

          <p className="mt-5">
            I began my journey as a Front End Developer in 2021, and since then,
            I have continued to grow and evolve as a Developer, taking on new
            challenges and learning the latest technologies along the way. I
            build mobile applications using modern technologies such as React
            Native CLI or Expo, Tailwind, Redux, Paystack, Firebase, Typescript
            and more.
          </p>

          <p className="mt-5">
            I am always looking for opportunities to contribute to open source
            projects and to learn new technologies.
          </p>

          <p className="mt-5">Educational background:</p>
          <ul className="list-disc">
            <li>B.sc in Political Science</li>
            <li>
              Certified React Native Developer{" "}
              <a
                href="https://www.udemy.com/certificate/UC-8248ee72-2516-4843-a19e-27e1fa1424c4/"
                className="text-blue-400 underline"
              >
                Credentials
              </a>
            </li>
          </ul>

          <p className="mt-5">
            In conclusion, I am readily available for employment opportunities,
            and I invite you to contact me through any of the social media
            platforms listed below.
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
    </div>
  );
};
