import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="w-[70%] mx-auto">
      <Header />
      <Hero />
      <Skills />
      <div className="border-b-2 my-[2rem]"></div>
      <Profile />
    </div>
  );
};

export default App;
