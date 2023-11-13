const Profile = () => {
  return (
    <div className="flex font-['Inter'] w-[80%] mx-auto">
      <div className="flex flex-col w-[100%]">
        <h2 className="text-5xl font-semibold dark:text-[#AEBCCF]">Profile</h2>
        <div className="flex justify-between flex-wrap">
          <div className="flex flex-col w-[30rem]">
            <h2 className="text-indigo-700 text-3xl font-medium mt-[2.44rem] mb-[1.31rem] dark:text-[#B7AAFF]">
              Profile
            </h2>
            <div className="flex justify-between">
              <div className="text-lg leading-9 text-black font-semibold dark:text-white">
                <p>Doğum tarihi</p>
                <p>İkamet Şehri</p>
                <p>Eğitim Durumu</p>
                <p>Tercih Ettiği Rol</p>
              </div>
              <div className="text-lg leading-9 dark:text-white">
                <p>24.03.1996</p>
                <p>Ankara</p>
                <p>Hacettepe Ünv. Biyoloji Lisans, 2016</p>
                <p>Frontend UI</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[40%] ">
            <h2 className="mt-[2.44rem] mb-[1.31rem] text-indigo-700 text-3xl font-medium dark:text-[#B7AAFF]">
              About Me
            </h2>
            <div className="flex flex-col gap-5 text-lg dark:text-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                aut, odit laborum aliquam voluptatum nisi mollitia.
              </p>
              <p>
                Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
                deserunt quam temporibus cumque magnam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
