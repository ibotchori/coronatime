import React from "react";

type Props = {
  mainText?: string;
  paragraph?: string;
};

function Title({ mainText, paragraph }: Props) {
  return (
    <div>
      <h1 className="font-extrabold  text-2xl pb-1 md:pb-2">{mainText}</h1>
      {paragraph && <p className="font-light text-xl pb-4">{paragraph}</p>}
    </div>
  );
}

export default Title;
