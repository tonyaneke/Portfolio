import { MapPin } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import pic from "./../../assets/proimg.png";
import wave from "./../../assets/512.gif";

export const Home = () => {
  return (
    <div id="home">
      <div
        className=" flex justify-between items-center pt-20 md:pt-40 mx-7 flex-wrap gap-5"
        data-aos="fade-in"
      >
        <div>
          <h1 className="text-5xl md:text-7xl font-bold flex items-center gap-3">
            {"Hi, I'm Anthony"}
            <span>
              <img src={wave} className="w-14" alt="" />
            </span>
          </h1>

          <p className=" max-w-3xl mt-5 text-xl">
            A skilled crossplatform Mobile Developer with the focus on building
            exceptional digital products that are reliable, accessible, visually
            appealing and responsive with React Native. Aspiring to work in a
            challenging and competitive Blockchain company, where I can utilize
            my knowledge and skill efficiently to contribute to the overall
            goals and objective of the organization through my hard work and 3
            dedication.
          </p>

          <p className="mt-5 flex gap-1 items-center">
            <MapPin size={30} />
            Lagos, Nigeria
          </p>
        </div>

        <div>
          <img src={pic} alt="" className="w-72 mr-10" />
        </div>
      </div>
    </div>
  );
};
