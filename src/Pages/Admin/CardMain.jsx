import { NavLink } from "react-router-dom";

export const CardMain = ({ data }) => {
  return (
    <div className="relative w-40 min-w-210 px-2 py-4  hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center">
      <div className="2-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
        <img
          whileHover={{ scale: 1.05 }}
          src={data.posterid}
          className="w-full h-full rounded-lg object-cover"
          alt="Event_Image"
        />
      </div>
      <p className="text-base text-center text-headingColor font-semibold my-2">
        Name: {data?.name}
      </p>
      <p className="text-base text-center text-headingColor font-semibold my-2">
        Date: {data?.date}
      </p>
      <NavLink
        className="appearance-none flex items-center justify-center w-48 bg-black text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-white hover:border-black hover:text-black cursor-pointer"
        to={`/edit/${data.id}`}
      >
        Details
      </NavLink>
    </div>
  );
};
