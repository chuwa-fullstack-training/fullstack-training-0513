import { useState } from 'react';
import '../css/hw2.css';
import ColorComponent from './hw2colorComponent';

export default function HW() {

    const cardName = ["first", "second", "third", "fourth", "fifth", "sixth"];
    const colors = ["lightcoral", "lightgrey", "azure", "cornflowerblue", "darkseagreen"]

    const [nameList, setNameList] = useState(cardName.map((name, idx) => ({ id: idx, name: name, bg: "white" })));
    const [selectedId, setSelectedId] = useState(0);

    const changeName = (id, name) => {
        const updatedNameList = nameList.map((item) => {
            if (item.id !== id) return item;
            item.name = name;
            return item;
        });
        setNameList(updatedNameList);
    };

    const changeColor = (color) => {
        const updatedNameList = nameList.map((item) => {
            if (item.id !== selectedId) return item;
            item.bg = color;
            return item;
        });
        setNameList(updatedNameList);
    };


    return (
        <>
            <div className='ops-wrapper'>
                <div className='op-wrapper'>
                    <button className='name-button'>{nameList[selectedId].name}</button>
                    <ul class="submenu">
                        {
                            nameList.map((item) => {
                                return <li key={item.id} class="submenu-item" onClick={() => {setSelectedId(item.id)}}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='op-wrapper'>
                    <button className='color-button'>Choose color</button>
                    <ul class="submenu">
                        {
                            colors.map((color, idx) => {
                                return <li key={idx} class="submenu-item" onClick={() => {changeColor(color)}}>{color}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className='cards-wrapper'>
                {nameList.map((item, idx) => <ColorComponent 
                    key={idx}
                    value={item.name}
                    color={item.bg}
                    idx={idx}
                    changeName={changeName}
                />)}
            </div>
        </>
    )
}