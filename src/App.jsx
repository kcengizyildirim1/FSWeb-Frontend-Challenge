import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className=" font-['Inter']  dark:bg-[#252128]">
      <Header />
      <Hero />
      <Skills />
      <div className="border-b-2 my-[2rem]"></div>
      <Profile />
      <div className="border-b-2 my-[2rem]"></div>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
