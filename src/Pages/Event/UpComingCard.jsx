import useCountdown from "../../Hooks/useCountDown";
import DateTimeDisplay from "../../Components/DateTimeDisplay";

export default function UpComingCard(props) {
  const [days, hours, minutes, seconds] = useCountdown(props.Date);
  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex space-x-3 items-center ">
          <DateTimeDisplay value={days} type={'Days'}/>
          <DateTimeDisplay value={hours} type={'Hours'}/>
          <DateTimeDisplay value={minutes} type={'Mins'}/>
          <DateTimeDisplay value={seconds} type={'Secs'}/>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center bg-white w-[22rem] p-6 space-y-4 rounded-lg">
      <h1 className="font-cairo font-bold">Upcoming Event</h1>
      <h2 className="font-cairo text-lg font-bold">{props.Name}</h2>
      <div className="flex justify-evenly items-center">
        <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
      </div>
    </div>
  );
}
