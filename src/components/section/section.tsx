import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './section.css';

const Section = () => {
    const [colwidth, setColWidth] = useState(6);
    return (
        <>
            <Col md={colwidth}>
                <div className="section" >
                    <Button onClick={() => setColWidth(colwidth - 1)}>Left</Button>
                    <Button onClick={() => setColWidth(colwidth + 1)}>Right</Button>
                </div>
            </Col>
        </>
    )
}

export default Section;