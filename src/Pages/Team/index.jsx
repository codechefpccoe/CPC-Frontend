// Components
import Navbar from "../../Components/Navbar";
import Profile_card from "../../Components/Profile_card";

// Team data
import TeamData from "../../data/team_data.json";

const TeamPage = () => {
  return (
    <div className="flex flex-col overflow-y-auto dark:bg-secondary">
      <Navbar />
      <div className="p-[2rem_1rem_0.5rem] lg:p-[1rem_2rem]">
        <h1 className="w-full text-center font-cairo text-3xl text-white p-3 rounded-md bg-[#301e6793] backdrop-blur-md">
          Core Team
        </h1>
        <div className="p-[2rem_1rem_0.5rem] lg:p-[2rem_5rem_1rem] flex justify-evenly flex-wrap ">
          {TeamData.map((data) => {
            if (data.Team === "Core")
              return (
                <Profile_card
                  image={data.image}
                  Name={data.Name}
                  Team={data.Team}
                  Role={data.Role}
                  email={data.email}
                  Instagram={data.Instagram}
                  Website={data.Website}
                  github={data.GitHub}
                  linkedin={data.LinkedIn}
                />
              );
          })}
        </div>
      </div>
      <div className="p-[2rem_1rem_0.5rem] lg:p-[1rem_2rem]">
        <h1 className="w-full text-center font-cairo text-3xl text-white p-3 rounded-md bg-[#301e6793] backdrop-blur-md">
          Executive Team
        </h1>
        <div className="p-[2rem_1rem_0.5rem] lg:p-[2rem_5rem_1rem] flex justify-evenly flex-wrap">
          {TeamData.map((data) => {
            if (data.Team === "Executive")
              return (
                <Profile_card
                  image={data.image}
                  Name={data.Name}
                  Team={data.Team}
                  Role={data.Role}
                  email={data.email}
                  Instagram={data.Instagram}
                  facebook={data.Facebook}
                  github={data.GitHub}
                  linkedin={data.LinkedIn}
                />
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
