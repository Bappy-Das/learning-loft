// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import banner from '../../images/Cbaner.PNG'
import './Banner.css'

const Banner = () => {
    let history = useHistory();
    const btnHandle = () => {
        history.push("/courses");
    }
    return (
        <Row className=" d-flex align-items-center justify-content-evenly bd-color">
            <div className="col-md-5 ms-5 ">
                <h1><span className="span-hero mb-4">Access 250+</span> <br /> Online Tutorial From <br /> Top Instructor.</h1>
                <h4 className="hero-p mb-5">Meet university,and cultural institutions, who'll share their experience.</h4>
                <Button onClick={btnHandle} className="fw-bold" varient="primary">View Courses</Button>
            </div>
            <div className="col-md-6 pe-5">
                <img className="img-fluid" src={banner} alt="" srcset="" />
            </div>
        </Row>
    );
};

export default Banner;