import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <img
          data-aos="fade-up"
          src="https://avatars.githubusercontent.com/u/150212432?v=4"
          alt="logo"
          className="w-[260px] rounded-full  mb-5  h-[260px]"
        />
        <h1
          data-aos="fade-up"
          className="text-3xl mb-4 lg:text-5xl font-bold text-white"
        >
          Hello! My name is ABDUMUHAYMIN
        </h1>
        <p data-aos="fade-up" className="text-white text-xl mb-5">
          I am a frontend developer
        </p>
        <div className="flex gap-5" data-aos="fade-up">
          <Link
            className="border-[2px] border-white p-3 text-white rounded-md hover:bg-white hover:text-black"
            to="/app/projects"
          >
            Getstarted
          </Link>
        </div>
      </div>
    </div>
  );
};
