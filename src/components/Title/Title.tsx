import React from "react";

type Props = {
  mainText?: string;
  paragraph?: string;
};

function Title({ mainText, paragraph }: Props) {
  return (
    <div className="pt-10">
      <h1 className="font-extrabold  text-2xl pb-2">{mainText}</h1>
      {paragraph && (
        <p className="font-light text-lg sm:text-xl pb-4">{paragraph}</p>
      )}
    </div>
  );
}

export default Title;
