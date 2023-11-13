import { useContext } from "react";
import { DataContext } from "../context/ProjectContext";

const Projects = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="w-[80%] mx-auto flex flex-col gap-10 pb-10">
      <h2 className="text-black text-5xl font-semibold dark:text-[#AEBCCF]">
        Projects
      </h2>
      <div className="flex justify-between gap-5 flex-wrap">
        {data.map((veri) => (
          <div key={veri.title} className="flex flex-col  max-w-[30rem]">
            <img
              className="bg-cover object-cover"
              src={veri.img}
              alt={veri.title}
            />
            <h2 className="text-3xl py-4 text-indigo-700 font-medium dark:text-[#CFCBFF]">
              {veri.title}
            </h2>
            <p className="text-gray-500 text-[0.875rem] dark:text-white">
              {veri.desc}
            </p>
            <div className="flex gap-5 pt-5">
              {veri.tech.map((techno) => (
                <button
                  className=" flex border-[1px] p-1 px-3 border-indigo-700 text-indigo-700 rounded-[0.25rem] font-medium"
                  key={techno}
                >
                  {techno}
                </button>
              ))}
            </div>
            <div className="flex justify-between py-4 text-base font-medium underline leading-4 text-indigo-800 dark:text-[#E1E1FF]">
              <a href={veri.github}>Github</a>
              <a href={veri.projecturl}>View Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
