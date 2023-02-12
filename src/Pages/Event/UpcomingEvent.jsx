import UpComingCard from "./UpComingCard";

export const UpcomingEvent = ({ EventData }) => {
  const getCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    return today;
  };

  return (
    <>
      <div className="flex space-x-4">
        {EventData.map((val, ind) => {
          if (val.date > getCurrentDate())
            return <UpComingCard key={ind} Name={val.name} Date={val.date} />;
        })}
      </div>
    </>
  );
};
