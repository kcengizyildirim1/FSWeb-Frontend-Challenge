import kcy from "../assets/kcy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <main className="flex flex-col pt-20">
      <div className="flex items-center gap-5">
        <div className="border-solid border-b-2 w-[6rem] flex border-indigo-700"></div>
        <p className="text-lg font-['Inter']">Kürşad Cengiz Yıldırım</p>
      </div>
      <div className="flex gap-5 justify-between font-['Inter'] flex-wrap">
        <div className="flex flex-col w-[50%] h-[30rem]">
          <h1 className="text-7xl font-bold my-10">
            Creative thinker Minimalism lover
          </h1>
          <p className="text-lg w-[70%] ">
            Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="my-10 gap-5 flex text-lg">
            <button className="border-solid border-2 p-4  flex justify-center items-center rounded-md bg-indigo-800 text-white">
              <span>Hire Me</span>
            </button>
            <button className="border-solid border-2 p-4 gap-2 flex justify-center items-center rounded-md ">
              <FontAwesomeIcon icon={faGithub} size="xl" />
              <span>Github</span>
            </button>
            <button className="border-solid border-2 p-4 gap-2 flex justify-center items-center rounded-md">
              <FontAwesomeIcon icon={faLinkedin} size="xl" />
              <span>Linkedin</span>
            </button>
          </div>
        </div>
        <div className="inline-flex justify-center">
          <img
            className="object-cover rounded-[1.125rem] w-[25rem] h-[25rem] object-top"
            src={kcy}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
