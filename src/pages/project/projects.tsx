import { Link } from "react-router-dom";
import Giper from "../../assets/giper.png";
import Mobi from "../../assets/mobilux.png";

export const Projects = () => {
  return (
    <div>
      <ul
        id="scroll"
        className="flex flex-col fixed top-[100px]   p-5 h-[500px] gap-5"
      >
        <li>
          <Link
            className="lg:w-[500px] w-[250px] text-center border-[2px] border-white inline-block"
            to="https://github.com/Abdumuhaymin/final-exam"
          >
            <img
              className="lg:w-[500px] w-[250px]  mb-5 h-[auto]"
              src={Mobi}
              alt=""
            />
            <div className="p-3">
              <h2 className="text-white text-3xl">Giper Mart</h2>
              <p className="text-white text-lg">Web Application</p>
              <p className="text-white text-lg">
                Enter through the link and get complete information
              </p>
              <b className="text-white">
                Do you wanna try?{" "}
                <Link
                  className="text-blue-700"
                  to="https://github.com/Abdumuhaymin/final-exam"
                >
                  CLICK here!
                </Link>
              </b>
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="lg:w-[500px] w-[250px] text-center border-[2px] border-white inline-block"
            to="https://giper-mart-ten.vercel.app/"
          >
            <img
              className="lg:w-[500px] w-[250px]  mb-5 h-[auto]"
              src={Giper}
              alt=""
            />
            <div className="p-3">
              <h2 className="text-white text-3xl">Giper Mart</h2>
              <p className="text-white text-lg">Web Application</p>
              <p className="text-white text-lg">
                Thera pagenation, search working with backend. Working and
                infititive corusel. And also i was created backend data on my
                own
              </p>
              <b className="text-white">
                Do you wanna try?{" "}
                <Link
                  className="text-blue-700"
                  to="https://giper-mart-ten.vercel.app/"
                >
                  CLICK here!
                </Link>
              </b>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
