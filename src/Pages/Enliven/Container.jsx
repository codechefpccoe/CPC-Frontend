import React from "react";
import { BsEmojiSunglasses } from "react-icons/bs";

const Container = () => {
  return (
    <div className="flex-1 flex items-center justify-center dark:bg-secondary">
      <p className="-mt-12 text-2xl flex items-center gap-3 dark:text-white">
        Coming Soon . . . <BsEmojiSunglasses />
      </p>
    </div>
  );
};

export default Container;
