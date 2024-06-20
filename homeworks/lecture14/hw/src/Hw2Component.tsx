import style from "./hw2.module.css";
import React, { FC } from "react";

interface propsType {
  color: string,
  value: string,
  idx: number,
  updateName: (idx: number, name: string) => void
}

const Block: FC<propsType> = ({ color, value, updateName, idx }) => {

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateName(idx, e.target.value);
  }

  return (
    <div className={`${style[color]} ${style.block}`}>
      <p>Component name:</p>
      <input value={value} onChange={updateValue}/>
    </div>
  );
};

export default Block;