import logo from "../Images/Luffy.jpg";

// React-icons
import {
  FaGlobe,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Profile_card = ({
  image,
  Name,
  Role,
  Description,
  email,
  Instagram,
  Website,
  github,
  linkedin,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-[1rem] min-w-[20rem] h-[26rem] font-cairo shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] rounded-xl space-y-4 mb-[1rem]">
      <img
        src={logo}
        alt="profile"
        className="h-36 w-36 rounded-full img-fit object-cover border-[2px] border-[#301E67] ring-2 ring-yellow-400 ring-offset-4"
      />
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold ">{Name}</h1>
        <h2 className="text-center text-sm font-bold text-[#301E67]">
          {Role}
        </h2>
      </div>
      <a
        href={`mailto:${email}`}
        className="bg-[#301E67] text-white p-[4px_14px] rounded-lg hover:bg-white hover:text-[#301E67] hover:ring-2 ring-[#301E67] transform duration-700 ease-in-out"
      >
        {email}
      </a>
      <div className="flex space-x-7">
        <a href={Website}>
          <FaGlobe className="text-[#301E67] text-2xl hover:animate-bounce" />
        </a>
        <a href={github}>
          <FaGithub className="text-[#301E67] text-2xl hover:animate-bounce" />
        </a>
        <a href={Instagram}>
          <FaInstagram className="text-[#301E67] text-2xl hover:animate-bounce" />
        </a>
        <a href={linkedin}>
          <FaLinkedinIn className="text-[#301E67] text-2xl hover:animate-bounce" />
        </a>
      </div>
    </div>
  );
};

export default Profile_card;
