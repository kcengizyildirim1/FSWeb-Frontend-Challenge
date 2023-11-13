const Skills = () => {
  return (
    <div className="font-['Inter'] w-[80%] mx-auto">
      <h2 className="text-5xl font-bold my-5">SKILLS</h2>
      <div className="flex justify-between">
        <div className="flex flex-col w-[18rem]">
          <h2 className="text-3xl mb-[1.75rem] font-medium text-indigo-700">
            Java Script
          </h2>
          <p className="text-xs text-gray-500 font-normal">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col w-[18rem]">
          <h2 className="text-3xl mb-[1.75rem] font-medium text-indigo-700">
            React.Js
          </h2>
          <p className="text-xs text-gray-500 font-normal">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="flex flex-col w-[18rem]">
          <h2 className="text-3xl mb-[1.75rem] font-medium text-indigo-700">
            Node.Js
          </h2>
          <p className="text-xs text-gray-500 font-normal">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
