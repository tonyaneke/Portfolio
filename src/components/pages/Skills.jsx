import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import typescript from "../../assets/typescript.png";
import firebase from "../../assets/firebase.png";
AOS.init();

export const Skills = () => {
  return (
    <div className=" mt-20 mx-7 pb-5" id="skills" data-aos="fade-in">
      <p className="text-center bg-gray-500 w-fit mx-auto py-1 px-4 rounded-2xl">
        Skills
      </p>
      <div className="flex gap-12 md:gap-10 items-center flex-wrap mt-5 justify-center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
          target="_black"
        >
          <img
            src="https://benjamin-dev.netlify.app/assets/html-d4a7db0f.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_black"
        >
          <img
            src="https://benjamin-dev.netlify.app/assets/css-0525acde.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
          target="_black"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAMAAAC8EZcfAAAAeFBMVEX33x4AAAD74h81MAbv2R3cxhsxLAb/5h//6R+JfBCShBJJQgmrmhUiHwTv1x3z2x5mXAw6NAejkxTo0Rzfyxu1oxbJtRgbGAMqJgUfHATWwRrOuhnEsRgPDgH/7yAWFAN5bQ9SSgpsYg1AOghaUQu9qhcICAGAdRCc1uV+AAAE4UlEQVR4nO2ba3erKhBAdRoDVaNG1KZq0pjn//+HV5vkVBCQPLDn3DX7U1ctYYeXzEAdB0EQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ5N8HAMg37Q+TVUp51BUDpZFXHPOWY+FFuj99JbH/3sdn8mqBUJYmwduH+83nPEjSjJIJHGcLt8/Kk9ZJWLh3B8xDRuwLzrk632SCQNJgqNcRpGBb0UAQvKVcr2PpWTYcF6Thp9qvHY45/V1Bkur0OkKrbTgmCKN+rpvaNBwRpPW4n+sWFntZLwjsw0RQsThNIXg28XPdgzU/vSCUazNBi8NQK0i3hn7uylof61tQohIkyfCtt/Ns+WkFST6wqwgllJLqwBWqLe5sdIJ0J/j5znWoEei5+1a3DDrBuBE6stdQpL7On31hd/OqEYSM3yScuL0iOXa/+/jTqL8hWK34BuRLdlN8X1nfs+oEiy9+BIouQbqxv6XWCdZrvWBkfz99VwueJ9C5T7Di45Ug/tsES/6ZW03RpfcIMiFUWk8y6MwFHTjwgm6TTW+ofdW9C4LuqZ4w5zEuSCpR0HWTwnokbC7o0KGg+5XUmylSHkaCxJcYuu4iZNMp6jesniJm3/veBG+5cUFVE7acktL2PsZEEOI3lWE7X45TKI4E7qRQC3YRgP0s5ljqYxiXcDSl7ekymjwaSc58+bHdfjZIv42kj77K34pJbpB6oXC74v9idutimIm7BoGtxYFoIugACecKtwtJ/Dupjx+Ip1yyL4bWMoSGgm0jsu1KYdcxiKimFuxOmjxfPVvWhSVDc8HuqG6WKl99S0tT+R7BFkrq3Zfc0NJxxJ2C7XRxSnlas7HTx3cLdoMx9iU9va6tdPIDgp1iJnn/2ZnIDwl2q07ZiIKJlczDg4LdWBSH4on9VYIORGIbZjb6+HHBNmwWQqqjjVlist1S1itscvLnBYeJi9lqRJBAelC0KhUOytJnl2ogxeBLRnwde2EcAdSNsmYq7HD8JwUJnNfLSGgNxtcR8Lc+aLQ7tb/9KKWd91pBEn/HZ2e+qsthwg8N93B2M3iT5t2IMAafOnqnZXL5FD5NuhEWs8PPU0Ly5kd8NqwcPGGD+MS7DuLz6fop834nQySsFOdbLwF4Tf/BMHcJIK7UD6+DAHnv5d70jtYGB9a3SQSZ+OTzyCcGiSMGAavZg35UCMqWjMI3ZDNIod4aQZY12pWb662yrmgmnjSKJ1HGkIGFuysyxrIyHAQZn5s/pU6DUm0bpVXGoogxL5cEouGDPSwRbKsKAsllrF4ITkLJ45Z5cDg0e9lNgfmjNyuAyVSkrPtZDOPrAFe2D6+CIwmqHv1RBExzY0uG4mKfkeFI5uIPRX+eynL8Gp5J0ECkyZP22G64YvrkpcBz22moFKEix17spHsMn+hg06oWw7NCUpk1vfvx9C1COpbja9+kkllIssTEb/+CW46Q6Q0X8jc9xOn47ajD7BXBCDjvmqoS5d0XynZ6xX3+olQ/QKVabta5JgEJqlzHpWiavS4nAyTbDVffxSEcOcAEMksDWYp1nuTw2uwvUHb0D701Z7lNKzLeBECJF/pJf3Pxlvi5R18faLbfOGasOuZhmNft1sQxbYGuYMSyui2ZH2uvLfnixuMqu/3PwP0lyaMlEQRBEOR/xn8B8EAxcZPqawAAAABJRU5ErkJggg=="
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://getbootstrap.com/" target="_black">
          <img
            src="https://benjamin-dev.netlify.app/assets/bootstrap-b71e3463.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://tailwindcss.com/" target="_black">
          <img
            src="https://benjamin-dev.netlify.app/assets/tailwind-376f90f0.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://react.dev/" target="_black">
          <img
            src="https://benjamin-dev.netlify.app/assets/react-ba3c8415.png"
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://styled-components.com/" target="_black">
          <img
            src={typescript}
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
        <a href="https://supabase.com/" target="_black">
          <img
            src={firebase}
            alt=""
            style={{ width: "100px" }}
            className=" hover:scale-105 duration-300"
          />
        </a>
      </div>
    </div>
  );
};
