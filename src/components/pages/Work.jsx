import { ArrowSquareOut } from "@phosphor-icons/react";
import AOS from "aos";
import "aos/dist/aos.css";
import jobgif from "../../assets/jobvid.gif";
import altru from "../../assets/altru.png";
import hydro from "../../assets/hydro.png";
import duo from "../../assets/duo.gif";

AOS.init();

export const Work = () => {
  return (
    <div className=" mt-20 mx-7 pb-5 overflow-x-hidden" id="work">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        Work
      </p>

      <section className="text-center mt-10">
        {/* 1 */}
        <div className="flex  justify-center gap-5 md:gap-10 flex-wrap">
          <div>
            <img
              src={jobgif}
              alt="job-app"
              style={{ width: "500px" }}
              className="object-contain"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Job App</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Discover the future of job searching with our pixel-perfect job
              application, meticulously crafted with React Native Expo CLI. Dive
              into a world of endless opportunities as you seamlessly search for
              jobs tailored to your preferences, receive real-time updates on
              the latest React Native job openings across the USA, and apply
              directly on company websites with a single, hassle-free click.
              We&apos;ve redefined job hunting, making it not just a process but
              an experience, where every detail matters, and your career journey
              is our priority.
            </p>

            <p className="mt-5">
              <a
                href="https://drive.google.com/file/d/1m34jEfJ1hoCIhuq48wtWPVXmVAKs2E1Z/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex  justify-center gap-5 md:gap-10 mt-20 flex-wrap">
          <div>
            <img
              src={altru}
              alt=""
              style={{ width: "500px" }}
              className=" object-contain"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Altru Donation App</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Introducing Altru, the cutting-edge donation app meticulously
              crafted with React Native, AsyncStorage, Redux, Firebase, and
              Paystack integration, now accessible on the Google Play Store.
              Altru empowers users to contribute to a multitude of causes and
              categories, redefining the donation experience. With a tech stack
              featuring JavaScript, React Native, React Native CLI, Redux
              Toolkit, Firebase Authentication, and Paystack payment
              integration, we&apos;ve created a seamless and secure platform
              that brings philanthropy to your fingertips. Explore the app and
              discover a world of giving right at your fingertips.
            </p>

            <p className="mt-5">
              <a
                href="https://play.google.com/store/apps/details?id=com.altrudonationappaneke&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex justify-center gap-5 md:gap-10 mt-20 flex-wrap">
          <div>
            <img
              src={hydro}
              alt=""
              style={{ width: "500px" }}
              className=" object-contain"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Hydro App 🥤</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Introducing Hydro, the revolutionary hydration reminder mobile app
              built with React Native and React Native Expo CLI. The new Hydro
              App is not just your average reminder; it&apos;s a holistic,
              technologically advanced solution for your health and well-being.
              With a tech stack encompassing JavaScript, React Native, and Expo
              Push Notification integration, we&apos;ve crafted a seamless and
              effective way to prioritize your health. Stay refreshed, stay
              healthy - discover the future of well-being with Hydro.
            </p>

            <p className="mt-5">
              <a
                href="https://drive.google.com/file/d/16TmdYFj3tYAopr8RNS3rtgqfozV__P7B/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex justify-center gap-5 md:gap-10 mt-20 flex-wrap">
          <div>
            <img
              src={duo}
              alt=""
              style={{ width: "500px" }}
              className="object-contain"
              data-aos="fade-down-right"
            />
          </div>

          <div data-aos="fade-down-left">
            <h1 className="font-bold text-2xl">Duo 🛒</h1>
            <p className="mt-3 max-w-xl text-left text-lg">
              Experience the reimagined world of e-commerce with our modernized
              mobile app, thoughtfully developed with the React Native. This app
              not only delivers seamless shopping but also introduces the
              convenience of email and social authentication, all while
              incorporating robust payment features. Our tech stack, including
              JavaScript, TypeScript, React Native, React Native CLI, Redux
              Toolkit, Firebase Authentication, and Paystack payment
              integration, ensures a smooth, secure, and engaging shopping
              experience for users. Discover the future of e-commerce with our
              innovative app.
            </p>

            <p className="mt-5">
              <a
                href="https://drive.google.com/drive/folders/1AXOj_DE7z3Fn5wzu_LZJWunADggxzxkP?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowSquareOut size={40} color="gray" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
