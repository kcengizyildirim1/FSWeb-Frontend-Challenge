const Header = () => {
  return (
    <header>
      <div>
        <div className="w-[80%]  mx-auto  flex flex-col">
          <div className="m-3 flex gap-5 justify-end">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <p className="ml-3 font-medium text-[#777]">DARK MODE</p>
            </label>

            <p>|</p>
            <p>
              <span className="text-[#4731D3] font-bold">TÜRKÇE</span>'YE GEÇ
            </p>
          </div>
          <div className="flex justify-between m-3 items-center flex-wrap">
            <a
              className="rounded-full bg-[#EEEBFF] p-4 rotate-[30deg] "
              href="#"
            >
              KCY
            </a>
            <nav className="gap-10 flex font-['Inter'] font-500 text-lg text-gray-500">
              <a className="p-3" href="">
                Skills
              </a>
              <a className="p-3" href="">
                Projects
              </a>
              <a
                className="border-solid border-[1px] py-[0.75rem] px-[2rem] rounded-md border-indigo-800"
                href=""
              >
                Hire Me
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
