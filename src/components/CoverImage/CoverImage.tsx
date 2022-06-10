import React from "react";

type Props = {};

const CoverImage = (props: Props) => {
  return (
    <div className="w-2/5 hidden md:block h-screen">
      <div className=" w-full h-full bg-no-repeat bg-cover bg-center bg-[url('./assets/img/cover_image.png')]"></div>
    </div>
  );
};

export default CoverImage;
