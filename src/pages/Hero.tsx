import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Element } from "react-scroll";

const Hero = () => {
  const words = [
    {
      text: "Hello",
    },
    {
      text: "I'm",
    },
    {
      text: "Arina.",
      className: "text-secondary-500",
    },
  ];
  return (
    <Element
      id="hero"
      name="hero"
      data-aos="fade-down"
      className="h-[500px] md:!pt-40  !w-full px-5 xl:px-10  grid grid-cols-2 gap-10 justify-center items-center">
      <div className="col-span-full md:col-span-1 flex flex-col justify-center items-start gap-5 w-full">
        <TypewriterEffect
          className="w-full !text-center md:!text-left !font-bold !text-4xl lg:!text-5xl xl:!text-7xl !text-nowrap"
          words={words}
        />
      </div>
      <div className=" relative col-span-full md:col-span-1 place-self-center">
        <img
          src="/images/gull.jpg"
          className="w-full aspect-square max-h-[250px] lg:max-h-[400px] max-w-[250px] lg:max-w-[400px] h-full rounded-full object-cover object-bottom"
          alt="arina_image"
        />
      </div>
    </Element>
  );
};

export default Hero;
