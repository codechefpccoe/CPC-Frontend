// React-icons
import { FaGlobe, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Profile_card = ({
  image,
  Name,
  Role,
  email,
  Instagram,
  Website,
  github,
  linkedin,
}) => {
  return (
    
    <div className="flex flex-col items-center justify-center p-[1rem] min-w-[20rem] h-[26rem] font-cairo shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] dark:shadow-[#301E67] rounded-xl space-y-4 mb-[1.5rem] bg-white dark:bg-[#130c29]">
      <img
        src={image}
        alt="profile"
        className="h-36 w-36 rounded-full object-cover border-[2px] border-[#301E67] ring-2 ring-yellow-400 ring-offset-4 dark:ring-offset-[#130c29]"
      />
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold dark:text-white">{Name}</h1>
        <h2 className="text-center text-sm font-bold text-[#301E67] dark:text-white">
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
        {Website && (
          <a href={Website} target="_blank">
            <FaGlobe className="text-[#301E67] text-2xl dark:text-white hover:animate-bounce" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank">
            <FaGithub className="text-[#301E67] text-2xl dark:text-white hover:animate-bounce" />
          </a>
        )}

        {Instagram && (
          <a href={Instagram} target="_blank">
            <FaInstagram className="text-[#301E67] text-2xl dark:text-white hover:animate-bounce" />
          </a>
        )}

        {linkedin && (
          <a href={linkedin} target="_blank">
            <FaLinkedinIn className="text-[#301E67] text-2xl dark:text-white hover:animate-bounce" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Profile_card;
