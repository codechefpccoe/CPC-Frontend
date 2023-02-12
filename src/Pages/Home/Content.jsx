import React, { useEffect, useRef, useState } from "react";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import insta from "../../Images/instagram.png";
import facebook from "../../Images/facebook.png";
import whastapp from "../../Images/whatsapp.png";
import linkdin from "../../Images/linkedin.png";
import twitter from "../../Images/twitter.png";
import { Popover } from "antd";

const contentData =
  "CodeChef PCCOE Chapter is the community for the students of Pimpri Chinchwad College of Engineering, Pune. Our vision and goal is to create competitive coding culture in our campus and to inspire more people to participate in coding contest.";

const whastappContent = (
  <div>
    <p>
      <a
        href="https://chat.whatsapp.com/IkNMyXb7TFh472jamgtJzI"
        target="_blank"
      >
        First Year
      </a>
    </p>
    <p>
      <a
        href="https://chat.whatsapp.com/GxfD5AK3lbc6ufyUi3jY5L"
        target="_blank"
      >
        Second Year
      </a>
    </p>
    <p>
      <a
        href="https://chat.whatsapp.com/LC0A76tv1fsJXYFSukKSYg"
        target="_blank"
      >
        Third Year
      </a>
    </p>
  </div>
);

const Content = () => {
  const [contentAnimationClasss, setContentAnimationClass] = useState("");

  const contentRef = useRef();
  var index = 0;

  useEffect(() => {
    setContentAnimationClass("content_animation");
    contentRef.current.innerHTML = "";
    const interval = setInterval(() => {
      if (index >= contentData.length) {
        setContentAnimationClass("");
        return () => clearInterval(interval);
      }
      contentRef.current.innerHTML =
        contentRef.current.innerHTML + contentData[index];
      index++;
    }, 75);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-1/2 justify-center flex flex-col gap-6 px-8 dark:text-white z-[40] max-lg:px-4 max-lg:gap-3 max-md:w-3/4 max-md:text-center max-vs:w-[90%]">
      <div className="font-iceberg text-4xl max-lg:text-3xl max-vs:text-2xl">
        <h1>
          <span className="text-primary">CODE</span> CHEF
        </h1>
        <h1>
          PCCOE <span className="text-primary">CHAPTER</span>
        </h1>
      </div>
      <div className="font-cairo text-base leading-6 pr-8 text-justify max-lg:pr-6 max-md:pr-0 max-vs:text-sm">
        <p className={contentAnimationClasss} ref={contentRef}></p>
      </div>
      <div className="font-cairo text-primary text-2xl max-lg:text-xl max-vs:text-base">
        <h1>Let Us Help You To get Started!</h1>
      </div>
      {/* <div className="flex gap-8 text-3xl w-10 max-lg:text-2xl max-lg:gap-6 max-md:justify-center max-vs:text-xl relative"> */}
      {/* <ImLinkedin className="text-[#0A66C2] cursor-pointer" />
        <ImFacebook2 className="text-[#395185] cursor-pointer" />
        <FiInstagram className="cursor-pointer" /> */}
      {/* <img src={facebook} className="cursor-pointer" />
        <img src={insta} className="cursor-pointer" />
        <img src={whastapp} className="cursor-pointer" />
        <img src={twitter} className="cursor-pointer" />
        <img src={linkdin} className="bg-white rounded cursor-pointer" />
      </div> */}

      <div className="h-10 flex gap-8 max-md:justify-center max-sm:h-8 max-sm:gap-5 mt-2 max-vs:gap-3 max-vs:h-6">
        <a
          href="https://www.instagram.com/pccoe.codechef.chapter/"
          className="w-10 max-sm:w-8 max-vs:w-6"
          target="_blank"
        >
          <img src={insta} className="w-full" />
        </a>
        <a
          href="https://www.facebook.com/pccoe.codechef.chapter/"
          className="w-10 max-sm:w-8 max-vs:w-6"
          target="_blank"
        >
          <img src={facebook} />
        </a>
        <a
          href="https://www.linkedin.com/company/codechef-pccoe-chapter/"
          className="w-10 bg-white rounded max-sm:w-8 max-vs:w-6"
          target="_blank"
        >
          <img src={linkdin} />
        </a>
        <a
          href="https://twitter.com/CodechefPccoe"
          target="_blank"
          className="w-10 max-sm:w-8 max-vs:w-6"
        >
          <img src={twitter} />
        </a>
        <Popover
          content={whastappContent}
          trigger="hover"
          className="w-10 h-auto max-sm:w-8 max-vs:w-6"
        >
          <img src={whastapp} />
        </Popover>
      </div>
    </div>
  );
};

export default Content;
