import React, { useState, useEffect } from "react";
import { Container, Row, Col, DropdownButton, Dropdown, FormControl } from "react-bootstrap";

export const ColorComponent = () => {
    const initComponents = [
        { id: 1, name: 'first', color: 'white'},
        { id: 2, name: 'second', color: 'white' },
        { id: 3, name: 'third' , color: 'white'},
        { id: 4, name: 'fourth', color: 'white'},
        { id: 5, name: 'fifth', color: 'white'},
        { id: 6, name: 'sixth', color: 'white'},
    ];

    const colors = ['white', 'black', 'blue', 'green', 'yellow']

    const [components, setComponents] = useState(initComponents);
    const [selectedColor, setSelectedColor] = useState("white");
    const [selectedComponent, setSelectedComponent] = useState(1);

    useEffect(() => {
        setComponents(prev =>
            prev.map(component =>
                component.id === selectedComponent
                    ? { ...component, color: selectedColor }
                    : component
            )
        );

    }, [selectedComponent, selectedColor]);

    const handleNameChange = (e, id) => {
        e.preventDefault();
        const name = e.target.value;
        setComponents((prev) => {
            return prev.map((component) => 
                component.id === id
                ? { ...component, name: name }
                : component)
        })
    }


    return (
        <Container fluid>
            <Row className="mb-4 mt-4">
                <Col>
                    <DropdownButton id="dropdown-basic-button" title={components[selectedComponent - 1].name} variant="secondary">
                        {components.map((component) =>(
                            <Dropdown.Item 
                            key = { component.id}
                            onClick = {() => setSelectedComponent(component.id)} >
                                {component.name}
                            </Dropdown.Item>
                        ))
                    }
                    </DropdownButton>
                </Col>

                <Col>
                <DropdownButton id="dropdown-basic-button" title={selectedColor} variant="secondary">
                        {colors.map((color) =>(
                            <Dropdown.Item 
                            key = {color}
                            onClick = {() => setSelectedColor(color)} >
                                {color}
                            </Dropdown.Item>
                        ))
                    }
                    </DropdownButton>
                </Col>
            </Row>

            <Row>
                {components.map((component) => (
                    <Col key = {component.id} xs={12} md={4} className="mb-4">
                        
                        <div style={{ backgroundColor: component.color, padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <FormControl 
                        type="text"
                        value={component.name} 
                        onChange={(e) => handleNameChange(e, component.id)}
                        placeholder="Enter name">
                        
                        </FormControl>
                        </div>

                    </Col>
                ))}

            </Row>

        </Container>
    );
};