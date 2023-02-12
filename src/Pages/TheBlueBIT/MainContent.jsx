import React from "react";
import { useEffect } from "react";
import { Roll, Bounce } from "react-reveal";

export const MainContent = () => {
  const [ani2, sani2] = useState(false);
  const [ani3, sani3] = useState(false);
  const [ani4, sani4] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      sani2(true);
    }, 1000);
    setTimeout(() => {
      sani3(true);
    }, 2000);
    setTimeout(() => {
      sani4(true);
    }, 3000);
  }, []);

  return (
    <div className="h-full flex justify-between">
      <div className="w-3/6 mt-16 ml-10 flex flex-col gap-7">
        <Roll right>
          <div className="text-5xl font-iceberg">
            The <span className="text-sky-600">Blue</span> BIT
          </div>
        </Roll>

        <Roll left when={ani2}>
          <div className="text-2xl">#ThinkTwiceCodeOnce</div>
        </Roll>
        <Bounce left when={ani3}>
          <div className="text-slate-100 font-thin">
            The Blue BIT is an adrenaline-fueled hackathon where you can
            collaborate with top talents to create cutting-edge projects that
            can change the world. It is the ultimate playground for anyone who
            loves to build, tinker, and create.
          </div>
        </Bounce>
        <Bounce bottom when={ani4}>
          <div className="bg-sky-600 px-10 py-3 w-fit cursor-pointer shadow-2xl shadow-slate-600">
            Register For FREE
          </div>
        </Bounce>
      </div>
      
      {/* <img className="" style={{ width: "40vw" }} src={image}></img> */}
    </div>
  );
};
