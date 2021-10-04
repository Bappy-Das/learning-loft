import React from 'react';
import { Row } from 'react-bootstrap';
import logo from '../../images/logo2.PNG'

import './Footer.css'
const Footer = () => {
    return (
        <Row className="align-items-center  bg fw-bold">
            <div className="col-md-5">
                <img className="img" src={logo} alt="" srcset="" />
            </div>
            <div className="col-md-7 text-light">
                <Row>
                    <div className="col-md-3">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-md-3">
                        <p>Terms & Service</p>
                    </div>
                    <div className="col-md-4">
                        <p>All Right Reserved &copy; Bappy Das </p>
                    </div>
                </Row>
            </div>

        </Row>
    );
};

export default Footer;

