import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorComponents from './components/ColorComponents';
import ComponentView from './components/ComponentView';

const App = () => {
    const [components, setComponents] = useState({
        component1: { name: 'Component 1', color: '#ffffff' },
        component2: { name: 'Component 2', color: '#ffffff' },
        component3: { name: 'Component 3', color: '#ffffff' },
        component4: { name: 'Component 4', color: '#ffffff' },
        component5: { name: 'Component 5', color: '#ffffff' },
        component6: { name: 'Component 6', color: '#ffffff' },
    });

    const handleNameChange = (id, newName) => {
        setComponents(prevComponents => ({
            ...prevComponents,
            [id]: { ...prevComponents[id], name: newName }
        }));
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ColorComponents components={components} setComponents={setComponents} />} />
                    <Route path="/component/:id" element={<ComponentView components={components} onNameChange={handleNameChange} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
