import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css'

// Courses component for all courses 
const Course = (props) => {
    const { name, price, details, img } = props.course;
    return (
        <div>
            <Col >
                <Card className="full-card">
                    <Card.Img className="card-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{details.slice(0, 100)}... </Card.Text>
                    </Card.Body>
                    <hr className="w-75 mx-auto" />
                    <div className="d-flex align-items-center justify-content-around p-2 mb-2">
                        <div><strong>Price : {price} $</strong></div>
                        <div><a href="/">Read more</a></div>
                    </div>
                </Card>

            </Col>
        </div>
    );
};

export default Course;