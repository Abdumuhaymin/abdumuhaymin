import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center pt-5">
      <button
        className="text-white text-5xl  p-0 "
        onClick={() => navigate(-1)}
      >
        <IoIosArrowRoundBack />
      </button>
    </div>
  );
};

export default Header;
