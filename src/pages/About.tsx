import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      id="about"
      name="about"
      data-aos="fade-down"
      className="h-fit md:h-[600px] !w-full px-5 xl:px-10 pt-10 flex flex-row justify-start items-center gap-10 ">
      <div className="flex flex-col justify-center items-start gap-5 w-full">
        <h1 className="section_header">About Me</h1>

        <h1 className="text-black font-light text-xl">
          I'm Arina, a chemistry student at the College of Science with a
          passion for learning, teaching, and making complex concepts simple. I
          love creating resources that simplify chemistry to help others
          understand and enjoy the subject. Feel free to explore my work!
        </h1>
      </div>
    </Element>
  );
};

export default About;
