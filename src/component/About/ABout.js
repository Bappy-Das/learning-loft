import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './About.css'

const ABout = () => {
    return (
        <Container className="my-5 about">
            <Row className="d-flex align-items-center justify-content-between">
                <div className="col-md-6 p-5">
                    <img className="img-fluid" src="https://themepure.net/template/educal/educal/assets/img/about/about.jpg" alt="" srcset="" />
                </div>
                <div className="col-md-6 p-5">
                    <h2>Achieve Your Goals With <br /> Learning Loft</h2>
                    <p>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                    <ol>&#10004; Upskill your organization.</ol>
                    <ol>&#10004; Access more then 100K online courses</ol>
                    <ol>&#10004; Learn the latest skills</ol>
                </div>
            </Row>
        </Container>
    );
};

export default ABout;