import style from "./hw2.module.css";
import {useState} from "react";
import dropDownIcon from "./assets/dropDown.svg";
import Block from "./Hw2Component.tsx";

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
  const [selectedId, setSelectedId] = useState(0);
  const [showNameList, setShowNameList] = useState(false);
  const [showColorList, setShowColorList] = useState(false);

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
      if (item.id !== selectedId) return item;
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

  return (
    <div className={style.hw2}>
      <div className={style.operation}>
        <div className={style.btn}>
          <button onClick={toggleNameList}>{nameList[selectedId].name}<img src={dropDownIcon} alt=''/></button>
          <ul className={showNameList ? style.show : style.hide}>
            {
              nameList.map((name) => (
                <li key={name.id} onClick={() => {setSelectedId(name.id); toggleNameList()}}>{name.name}</li>
              ))
            }
          </ul>
        </div>
        <div className={style.btn}>
          <button onClick={toggleColorList}>Choose Color<img src={dropDownIcon} alt=''/></button>
          <ul className={showColorList ? style.show : style.hide}>
            {
              colors.map((color) => (
                <li key={color} onClick={() => {updateColor(color); toggleColorList()}}>{color}</li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className={style.board}>
        {
          nameList.map((name, idx) => (
            <Block key={idx} value={name.name} color={name.bg} idx={idx} updateName={updateName}/>
          ))
        }
      </div>
    </div>
  );
}

export default Hw2;