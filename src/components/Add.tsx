import React from "react";

interface AddProps {
  title: string;
}

type AddFinallyProps = Readonly<AddProps>;

const Add: React.FC<AddFinallyProps> = (props) => {
  const { title } = props;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Add;
