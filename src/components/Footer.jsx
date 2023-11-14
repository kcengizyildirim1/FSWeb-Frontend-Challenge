const Footer = () => {
  return (
    <footer className="flex flex-col font-['Inter'] bg-[#F9F9F9] dark:bg-[#141414]">
      <div className="w-[80%] mx-auto py-10 ">
        <h2 className="text-[2.625rem] max-w-[30rem] font-semibold dark:text-[#AEBCCF]">
          Let’s work together on your next product.
        </h2>
        <div className="flex justify-between mt-10 flex-wrap">
          <a href="#" className="text-xl">
            👉
            <span className="underline text-[#AF0C48] font-medium text-xl dark:text-[#BAB2E7]">
              k.cengizyildirim@gmail.com
            </span>
          </a>
          <nav className="flex gap-[6rem] justify-between text-[1.125rem] font-medium dark:text-[#E1E1FF]">
            <a href="#">Personal Blog</a>
            <a
              className="text-[#00AB6B]"
              href="https://github.com/kcengizyildirim1"
            >
              Github
            </a>
            <a
              className="text-[#0077B5]"
              href="https://www.linkedin.com/in/k%C3%BCr%C5%9Fad-cengiz-y%C4%B1ld%C4%B1r%C4%B1m-83a239213/"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
