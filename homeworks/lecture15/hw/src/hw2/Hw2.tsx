import style from "./hw2.module.css";
import {useState} from "react";
import dropDownIcon from "../assets/dropDown.svg";
import Block from "./Block.tsx";
import {useNavigate, useParams} from "react-router-dom";

const colors = ["blue", "red", "orange", "lightblue", "antiquewhite", "cadetblue"];
const names = ["first", "second", "third", "fourth", "fifth", "sixth"];

interface listType {
  name: string,
  bg: string,
  id: number
}

const Hw2 = () => {
  const [nameList, setNameList] = useState<listType[]>(
    names.map((name, idx) => ({name: name, bg: "white", id: idx})));
  const [showNameList, setShowNameList] = useState(false);
  const [showColorList, setShowColorList] = useState(false);

  const selectedId = useParams().id || '0';
  const blockId = Number(selectedId);
  const navigate = useNavigate();

  const updateName = (idx: number, name: string) => {
    const newList = nameList.map((item) => {
      if (item.id !== idx) return item;
      item.name = name;
      return item;
    });
    setNameList(newList);
  };

  const updateColor = (color: string) => {
    const newList = nameList.map((item) => {
      if (item.id !== blockId) return item;
      item.bg = color;
      return item;
    });
    setNameList(newList);
  };

  const toggleNameList = () => {
    setShowColorList(false);
    setShowNameList(!showNameList);
  };

  const toggleColorList = () => {
    setShowColorList(!showColorList);
    setShowNameList(false);
  };

  const switchBlock = (id: number) => {
    toggleNameList();
    navigate(`/hw2/${id}`);
  };

  return (
    <div className={style.hw2}>
      <h3>Home work 2 - block {blockId + 1}</h3>
      <div className={style.operation}>
        <div className={style.btn}>
          <button onClick={toggleNameList}>{nameList[blockId].name}<img src={dropDownIcon} alt=''/></button>
          <ul className={showNameList ? style.show : style.hide}>
            {
              nameList.map((name) => (
                <li key={name.id} onClick={() => {
                  switchBlock(name.id)
                }}>{name.name}</li>
              ))
            }
          </ul>
        </div>
        <div className={style.btn}>
          <button onClick={toggleColorList}>Choose Color<img src={dropDownIcon} alt=''/></button>
          <ul className={showColorList ? style.show : style.hide}>
            {
              colors.map((color) => (
                <li key={color} onClick={() => {
                  updateColor(color);
                  toggleColorList()
                }}>{color}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className={style.board}>
        <Block key={blockId} value={nameList[blockId].name} color={nameList[blockId].bg} idx={blockId}
               updateName={updateName}/>
      </div>
    </div>
  );
}

export default Hw2;