import Hero from "./Hero";
import About from "./About";
import Container from "@/components/ui/Container";

const Home = () => {
  return (
    <Container as={`div`} className="flex flex-col w-full">
      <Hero />
      <About />
    </Container>
  );
};

export default Home;
