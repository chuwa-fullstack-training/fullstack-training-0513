import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ComponentList.css';

interface Component {
  id: number;
  name: string;
  color: string;
}

const initialComponents: Component[] = [
  { id: 1, name: 'aaron', color: 'white' },
  { id: 2, name: 'second', color: 'white' },
  { id: 3, name: 'third', color: 'white' },
  { id: 4, name: 'fourth', color: 'white' },
  { id: 5, name: 'fifth', color: 'white' },
  { id: 6, name: 'sixth', color: 'white' },
];

const ComponentList: React.FC = () => {
  const [components] = useState(initialComponents);

  return (
    <div className="component-list">
      {components.map(comp => (
        <Link key={comp.id} to={`/component/${comp.id}`} className="component-link">
          <div className="component-item">
            <div>{comp.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ComponentList;
