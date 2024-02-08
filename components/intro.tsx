import Image from "next/image";
import pic from "@/public/link pic(2).jpg";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src={pic}
            alt="Prathmesh Portrait"
            quality="95"
            priority={true}
            className=" h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:h-36 sm:w-36"
          />

          <span className=" absolute bottom-0 right-0 text-4xl sm:text-5xl">
            👋
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
