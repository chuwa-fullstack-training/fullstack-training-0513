"use client"
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBoxContext } from '../../component/hw2/BoxContext';

const BoxDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const boxId = Number(id);
  const { boxs, setBoxs } = useBoxContext();
  const [box, setBox] = useState(boxs.find(b => b.id === boxId));
  const navigate = useNavigate();

  const handleChangeName = (newName: string) => {
    setBox(prevBox => prevBox ? { ...prevBox, name: newName } : undefined);
    setBoxs(prevBoxs => prevBoxs.map(b => b.id === boxId ? { ...b, name: newName } : b));
  };

  useEffect(() => {
    setBox(boxs.find(b => b.id === boxId));
  }, [boxId, boxs]);

  return (
    <div className="container mx-auto mt-4">
      {box ? (
        <>
          <div className="mb-4">
            <button onClick={() => navigate('/hw2')} className="bg-gray-400 border border-gray-200 rounded px-2 py-1 text-white w-fit">Back</button>
          </div>
          <div className="px-4 pt-4 pb-20 border-2 border-gray-300" style={{ backgroundColor: box.color }}>
            <p className="text-gray-500 font-normal">component name:</p>
            <input
              type="text"
              value={box.name}
              onChange={(e) => handleChangeName(e.target.value)}
              className="mt-2 rounded px-2 border-2 border-gray-300"
            />
          </div>
        </>
      ) : (
        <p>Box not found</p>
      )}
    </div>
  );
};

export default BoxDetail;
