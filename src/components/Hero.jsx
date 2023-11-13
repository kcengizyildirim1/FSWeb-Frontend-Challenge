import kcy from "./kcy.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <main className="flex flex-col pt-20 w-[80%] mx-auto">
      <div className="flex items-center gap-5">
        <div className="border-solid border-b-2 w-[6rem] flex border-indigo-700 dark:border-[#B7AAFF]"></div>
        <p className="text-lg font-['Inter'] dark:text-[#B7AAFF]">
          Kürşad Cengiz Yıldırım
        </p>
      </div>
      <div className="flex gap-5 justify-between font-['Inter'] flex-wrap">
        <div className="flex flex-col w-[50%] h-[30rem]">
          <h1 className="text-7xl font-bold my-10 dark:text-[#AEBCCF]">
            Creative thinker Minimalism lover
          </h1>
          <p className="text-lg w-[70%] dark:text-[#fff]">
            Hi, I’m Almila. I’m a full-stack developer. If you are looking for a
            Developer who to craft solid and scalable frontend products with
            great user experiences. Let’s shake hands with me.
          </p>
          <div className="my-10 gap-5 flex text-lg">
            <button className="border-solid border-2 p-4  flex justify-center items-center rounded-md font-medium bg-indigo-800 text-white dark:bg-[#E1E1FF] dark:text-black">
              <span>Hire Me</span>
            </button>
            <button className="border-solid border-2 p-4 gap-2 flex justify-center items-center rounded-md dark:bg-[#383838] dark:border-[#E1E1FF dark:text-[#BAB2E7]">
              <FontAwesomeIcon icon={faGithub} size="xl" />
              <span>Github</span>
            </button>
            <button className="border-solid border-2 p-4 gap-2 flex justify-center items-center rounded-md dark:bg-[#383838] dark:border-[#E1E1FF]dark: text-[#BAB2E7]">
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
