import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import States from "../components/States";

const Home = () => {
  return (
    <>
      <Hero />
      <States />
      <ProjectSection limit={4} title="Latest Projects" />
    </>
  );
};

export default Home;
