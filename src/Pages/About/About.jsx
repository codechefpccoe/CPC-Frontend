// Components
import Navbar from "../../Components/Navbar";
import Profile_card from "../../Components/Profile_card";

// Role data
import TeamData from "../../data/about_data.json";

const About = () => {
  return (
    <div className="flex flex-col overflow-y-auto">
      <Navbar />
      <div className="p-[2rem_1rem_0.5rem] lg:p-[2rem]">
        <h1 className="w-full text-center font-cairo text-3xl text-white p-3 rounded-md bg-[#301e6793] backdrop-blur-md">
          Developers
        </h1>
        <div className="p-[2rem_1rem_0.5rem] lg:p-[2rem_5rem_1rem] flex justify-evenly flex-wrap ">
          {TeamData.map((data) => {
            if (data.Role === "Developer")
              return (
                <Profile_card
                  image={data.image}
                  Name={data.Name}
                  Role={data.Role}
                  Description={data.Description}
                  email={data.email}
                  Instagram={data.Instagram}
                  Website={data.Website}
                  github={data.Github}
                  linkedin={data.Linkedin}
                />
              );
          })}
        </div>
      </div>
      <div className="p-[2rem_1rem_0.5rem] lg:p-[2rem]">
        <h1 className="w-full text-center font-cairo text-3xl text-white p-3 rounded-md bg-[#301e6793] backdrop-blur-md">
          Designer
        </h1>
        <div className="p-[2rem_1rem_0.5rem] lg:p-[2rem_5rem_5rem] flex justify-evenly flex-wrap">
          {TeamData.map((data) => {
            if (data.Role === "Designer")
              return (
                <Profile_card
                  image={data.image}
                  Name={data.Name}
                  Role={data.Role}
                  Description={data.Description}
                  email={data.email}
                  Instagram={data.Instagram}
                  facebook={data.Facebook}
                  github={data.Github}
                  linkedin={data.Linkedin}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
